import React from 'react'
import TechStack from './TechStack'
import { useContext } from 'react'
import { NavBarContext } from '../navbar/navBarContext/NavBarContextProvider'

const Skills = () => {
  const {textSectionRef, somethingSectionRef } = useContext(NavBarContext)
  return (
    <>
      <TechStack />
      <div
        id="Text"
        ref={textSectionRef}
        className="relative h-full bg-red-600">Text</div>
      <div
        id="Something"
        ref={somethingSectionRef}
        className="relative h-full bg-yellow-900">Something</div>
    </>
  )
}

export default Skills
