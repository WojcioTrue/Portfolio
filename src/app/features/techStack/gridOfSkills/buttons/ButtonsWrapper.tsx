import React, { useContext, useEffect } from 'react'
import SkillButton from './SkillButton'
import { IoReaderOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { TechStackContext } from '../../techStackContext/TechStackContext';
import { SkillPromptContext } from '@/app/features/skillPrompt/SkillPromptContextProvider';

const SkillButtons = () => {
  const { isTarget } = useContext(TechStackContext)
  const { promptProps, promptDisplay } = useContext(SkillPromptContext)
  const { setDisplay } = promptDisplay
  const { setInTarget } = isTarget
  const disableButton = isTarget.inTarget.boolean

  const cleanDrop = () => {
    setInTarget({ boolean: false, id: '' })
  }

  const promptShow = () => {
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