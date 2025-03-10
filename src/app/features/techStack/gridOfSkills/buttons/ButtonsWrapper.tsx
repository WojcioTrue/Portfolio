import React, { useContext } from 'react'
import SkillButton from './SkillButton'
import { IoReaderOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { TechStackContext } from '../../techStackContext/TechStackContext';
import { SkillPromptContext } from '@/app/features/skillPrompt/SkillPromptContextProvider';

const SkillButtons = () => {
  const { isTarget } = useContext(TechStackContext)
  const { promptPosition } = useContext(SkillPromptContext)
  const { position, setPosition } = promptPosition
  const { inTarget, setInTarget } = isTarget

  const cleanDrop = () => {
    setInTarget({ boolean: false, id: '' })
  }

  const clickPromptCoords = () => {
    const element = document.getElementById('drag-target')?.getBoundingClientRect()
  
    const coords = {
      top: element!.top,
      left: element!.left,
    }
  
    console.log(coords)
    setPosition(coords)
  }

  return (
    <div className='w-full flex justify-end gap-3 border-opacity-30 pr-2'>
      <SkillButton
        onClick={() => clickPromptCoords()}
        icon={
          <IoReaderOutline
            className='m-auto'
            size={'26'}
            fill='white'
          />
        }
        text={'Open'}
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