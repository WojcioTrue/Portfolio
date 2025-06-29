import React, { useState } from 'react'
import CarouselSlideDisplay from './CarouselSlideDisplay'

export type SlideArrayType = {
  text: string,
  x: number,
  opacity: number
}

const slideArray: SlideArrayType[] = [
  {
    text: 'first',
    x: 0,
    opacity: 1,
  },
  {
    text: 'second',
    x: 250,
    opacity: 1,

  },
  {
    text: 'third',
    x: 500,
    opacity: 1,
  }
]

const CarouselWrapper = () => {
  const [elArr, setElArr] = useState<SlideArrayType[]>(slideArray)

  const rightClickEffect = (x: SlideArrayType[]) => x.map((el) => {
    if (el.x <= 0) {
      return {
        ...el,
        x: el.x - 250,
        opacity: 0,
      }
    } else {
      return {
        ...el,
        x: el.x - 250
      }
    }
  })

    const leftClickEffect = (x: SlideArrayType[]) => x.map((el) => {
    if (el.x >= -250) {
      return {
        ...el,
        x: el.x + 250,
        opacity: 1,
      }
    } else {
      return {
        ...el,
        x: el.x + 250,
        opacity: 0,
      }
    }
  })

  const rightClick = () => {
    setElArr(prev => rightClickEffect(prev))
  }

    const leftClick = () => {
    setElArr(prev => leftClickEffect(prev))
  }

  return (
    <div className='relative flex flex-row justify-center bg-green-600 w-[100%] max-w-[1200px] overflow-hidden '>
      <CarouselSlideDisplay arr={elArr} />
      <div onClick={() => leftClick()} className='bg-white h-[50px] w-[50px] absolute left-0 top-1/2'>Left</div>
      <div onClick={() => rightClick()} className='bg-white h-[50px] w-[50px] absolute right-0 top-1/2'>right</div>
    </div>
  )
}

export default CarouselWrapper