import { useContext, useEffect, useState } from 'react'
import { CarouselContext } from '../carouselContext/CarouselContextProvider'
import Slide from './slide/Slide'
import { SlideArrayType } from './CarouselWrapper'

const CarouselSlideDisplay = () => {
  const { carouseElementsArr, carouselSlideDisplayRef } = useContext(CarouselContext)
  const { array } = carouseElementsArr
  const [alteredArr, setAlteredArr] = useState<SlideArrayType | undefined>(undefined)

  useEffect(() => {
    const displayWidth = carouselSlideDisplayRef?.current?.getBoundingClientRect().width
    if (displayWidth !== undefined) {
      const newArr = array.map((x, i) => {
        return {
          ...x,
          x: displayWidth * (i),
        }
      })
      console.log(newArr)
    }

  }, [array, carouselSlideDisplayRef])

  return (
    <div
      ref={carouselSlideDisplayRef}
      className='bg-red-700 w-[200px] h-[200px] relative'>
      {array.map((x, i) =>
        <Slide
          key={i}
          text={x.text}
          x={x.x}
          index={i}
          opacity={x.visible ? 1 : 0}
          active={x.active}
          gap={x.gap}
        />)}
    </div>
  )
}

export default CarouselSlideDisplay