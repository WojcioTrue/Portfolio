import { RefObject, useContext, useEffect, useState } from 'react'
import { CarouselContext } from '../carouselContext/CarouselContextProvider'
import Slide from './slide/Slide'

const CarouselSlideDisplay = () => {
  const { carouseElementsArr, carouselSlideDisplayRef } = useContext(CarouselContext)
  const { array, setArray } = carouseElementsArr
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    const displayWidth = carouselSlideDisplayRef?.current?.getBoundingClientRect().width
    if (displayWidth !== undefined) {
      const modifiedArr = {
        ...array,
        width: displayWidth,
        x: 20,
      }

      console.log(modifiedArr)

      setDisplay(true)
      setArray(modifiedArr)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setArray, carouselSlideDisplayRef])

  return (
    <div
      ref={carouselSlideDisplayRef}
      className='bg-red-700 w-[200px] h-[200px] relative'>
      {display && array.elements.map((x, i) =>
        <Slide
          key={x.index}
          index={x.index}
          text={x.text}
          x={array.width * i}
          gap={20}
          opacity={x.visible ? 1 : 0}
          active={x.active}
        />)}
    </div>
  )
}

export default CarouselSlideDisplay