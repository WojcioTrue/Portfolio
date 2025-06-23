import React, { useContext } from 'react'
import { NavBarContext } from '../navbar/navBarContext/NavBarContextProvider'
import Header from './Header'
import Description from './Description'


const About = () => {
  const { aboutSectionRef } = useContext(NavBarContext)
  return (
    <div
      id="About"
      ref={aboutSectionRef}
      className="relative min-h-[calc(100%_-_77px)] border-t-[1px] border-my-lightGray bg-gradient-to-tl from-my-lightBackground from-[20%] via-my-white pt-10 pb-16 flex items-center flex-col justify-center">
      <Header />
      <Description/>
    </div>
  )
}

export default About