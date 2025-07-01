import { useContext, useEffect, useState } from 'react'
import { CarouselContext } from '../carouselContext/CarouselContextProvider'
import { SlideArrayType } from '../carouselContext/slidesArray'
import Slide from './slide/Slide'

const CarouselSlideDisplay = () => {
  const { carouseElementsArr, carouselSlideDisplayRef } = useContext(CarouselContext)
  const { array } = carouseElementsArr
  const [alteredArr, setAlteredArr] = useState<SlideArrayType[] | undefined>(undefined)

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
      setAlteredArr(newArr)
    }

  }, [array, carouselSlideDisplayRef])

  return (
    <div
      ref={carouselSlideDisplayRef}
      className='bg-red-700 w-[200px] h-[200px] relative'>
      {alteredArr && alteredArr.map((x) =>
        <Slide
          key={x.index}
          index={x.index}
          text={x.text}
          x={x.x}
          gap={x.gap}
          opacity={x.visible ? 1 : 0}
          active={x.active}
        />)}
    </div>
  )
}

export default CarouselSlideDisplay