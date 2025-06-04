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
        className="relative h-full bg-yellow-400">About</div>
      <div
        ref={textSectionRef}
        className="relative h-full bg-red-600">Text</div>
      <div
        ref={somethingSectionRef}
        className="relative h-full bg-yellow-900">Something</div>
    </>
  )
}

export default Skills
