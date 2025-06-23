import React, { useContext } from 'react'
import { NavBarContext } from '../navbar/navBarContext/NavBarContextProvider'

const About = () => {
    const {aboutSectionRef} = useContext(NavBarContext)
  return (
    <div
        id="About"
        ref={aboutSectionRef}
        className="relative h-full border-t-[1px] border-my-lightGray bg-gradient-to-br from-my-white from-20% via-my-lightBackground">About</div>
  )
}

export default About