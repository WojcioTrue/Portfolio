import React, { useContext, useEffect } from 'react'
import SkillButton from './SkillButton'
import { IoReaderOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { TechStackContext } from '../../techStackContext/TechStackContext';
import { DimensionPropsType, SkillPromptContext } from '@/app/features/skillPrompt/SkillPromptContextProvider';

const SkillButtons = () => {
  const { isTarget, dropTarget } = useContext(TechStackContext)
  const { promptDisplay, dropTargetProps } = useContext(SkillPromptContext)
  const { setDisplay } = promptDisplay
  const { setInTarget } = isTarget
  const { setPosition } = dropTargetProps
  const disableButton = isTarget.inTarget.boolean

  const cleanDrop = () => {
    setInTarget({ boolean: false, id: '' })
  }

  const promptShow = () => {
    const initProps = dropTarget?.current?.getBoundingClientRect() as DimensionPropsType
    const { top, right, bottom, left, width, height, x, y } = initProps
    setPosition({ top, right, bottom, left, width, height, x, y })
    setDisplay(true)
  }



  return (
    <div className='w-full flex justify-end gap-3 border-opacity-30 pr-2'>
      <SkillButton
        onClick={() => promptShow()}
        disabled={!disableButton}
        icon={
          <IoReaderOutline
            className='m-auto'
            size={'26'}
            fill='white'
          />
        }
        text={'Re-Open'}
      />
      <SkillButton
        onClick={() => cleanDrop()}
        disabled={!disableButton}
        icon={
          <IoCloseOutline
            className='m-auto'
            size={'30'}
            fill='white'
            strokeWidth={10}
          />
        }
      />
    </div>
  )
}

export default SkillButtons