import { useContext, useEffect, useState } from 'react'
import { CarouselContext } from '../carouselContext/CarouselContextProvider'
import Slide from './slide/Slide'

const CarouselSlideDisplay = () => {
  const { carouseElementsArr, carouselSlideDisplayRef } = useContext(CarouselContext)
  const { array, setArray } = carouseElementsArr
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    const displayWidth = carouselSlideDisplayRef?.current?.getBoundingClientRect().width
    if (displayWidth !== undefined) {
      const newArr = array.map((x, i) => {
        return {
          ...x,
          x: displayWidth * (i),
        }
      })
      // change display to true when array is modified
      setDisplay(true)
      setArray(newArr)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setArray, carouselSlideDisplayRef])

  useEffect(() => {
    console.log(array)
  },[array])

  return (
    <div
      ref={carouselSlideDisplayRef}
      className='bg-red-700 w-[200px] h-[200px] relative'>
      {array.map((x) =>
        <Slide
          key={x.index}
          index={x.index}
          text={x.text}
          x={x.x}
          gap={20}
          opacity={x.visible ? 1 : 0}
          active={x.active}
        />)}
    </div>
  )
}

export default CarouselSlideDisplay