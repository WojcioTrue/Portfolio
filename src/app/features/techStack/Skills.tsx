import React from 'react'
import TechStack from './TechStack'
import { useContext } from 'react'
import { NavBarContext } from '../navbar/navBarContext/NavBarContextProvider'

const Skills = () => {
  const { aboutSectionRef, textSectionRef, somethingSectionRef } = useContext(NavBarContext)
  return (
    <>
      <TechStack />
      <div
        ref={aboutSectionRef}
        id="About" className="relative h-full bg-yellow-400">About</div>
      <div
        ref={textSectionRef}
        id="Text" className="relative h-full bg-red-600">Text</div>
      <div
        ref={somethingSectionRef}
        id="Something" className="relative h-full bg-yellow-900">Something</div>
    </>
  )
}

export default Skills
