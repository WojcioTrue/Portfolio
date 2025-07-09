import React, { useContext } from 'react'
import { NavBarContext } from '../navbar/navBarContext/NavBarContextProvider'
import Header from './Header'
import Description from './Description'
import CarouselWrapper from './carousel/CarouselWrapper'
import { CarouselContextProvider } from './carouselContext/CarouselContextProvider'


const About = () => {
  const { aboutSectionRef } = useContext(NavBarContext)
  return (
    <CarouselContextProvider>
      <div
        id="About"
        ref={aboutSectionRef}
        className="relative min-h-[calc(100%_-_77px)] border-t-[1px] border-my-lightGray bg-gradient-to-tl from-my-lightBackground from-[20%] via-my-white pt-10 pb-16 flex items-center flex-col justify-center overflow-hidden">
        <Header />
        <Description />
        <CarouselWrapper />
      </div>
    </CarouselContextProvider>

  )
}

export default About