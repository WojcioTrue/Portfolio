import { useContext, useEffect, useState } from 'react'
import { CarouselContext } from '../carouselContext/CarouselContextProvider'
import Slide from './slide/Slide'
import useInitialWidth from '../carouselHooks/useInitialWidth'
import useResponsiveWidth from '../carouselHooks/useResponsiveWidth'

const CarouselSlideDisplay = () => {
  const { carouseElementsArr, carouselSlideDisplayRef } = useContext(CarouselContext)
  const { array } = carouseElementsArr
  const [display, setDisplay] = useState(false)
  const { gap } = array
  useInitialWidth(20)
  useResponsiveWidth()

  useEffect(() => {
    if (array.width !== 0) {
      setDisplay(true)
    }
  }, [array])

  return (
    <ul
      ref={carouselSlideDisplayRef}
      className='bg-red-700 relative w-[150px] h-[150px] md:w-[250px] md:h-[250px]'>
      {display && array.elements.map((x, i) =>
        <Slide
          key={x.index}
          index={x.index}
          text={x.text}
          x={x.x}
          gap={gap}
          active={x.active}
        />)}
    </ul>
  )
}

export default CarouselSlideDisplay