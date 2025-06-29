import React, { useState } from 'react'
import CarouselSlideDisplay from './CarouselSlideDisplay'

export type SlideArrayType = {
  text: string,
  x: number,
  visible: boolean,
  active: boolean
}

const slideArray: SlideArrayType[] = [
  {
    text: 'first',
    x: 0,
    visible: true,
    active: true,
  },
  {
    text: 'second',
    x: 250,
    visible: true,
    active: false,

  },
  {
    text: 'third',
    x: 500,
    visible: true,
    active: false,
  }
]

const CarouselWrapper = () => {
  const [elArr, setElArr] = useState<SlideArrayType[]>(slideArray)

  const changeActive = (x: SlideArrayType[]) =>
    x.map((el) => {
      if (el.x === 0) {
        return {
          ...el,
          active: true,
        }
      } else {
        return {
          ...el,
          active: false,
        }
      }
    })

  const rightClickEffect = (x: SlideArrayType[]) => x.map((el) => {
    if (el.x <= 0) {
      return {
        ...el,
        x: el.x - 250,
        visible: false,
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
        visible: true,
      }
    } else {
      return {
        ...el,
        x: el.x + 250,
        visible: false,
      }
    }
  })

  const rightClick = () => {
    setElArr(prev => rightClickEffect(prev))
    setElArr(prev => changeActive(prev))
  }

  const leftClick = () => {
    setElArr(prev => leftClickEffect(prev))
    setElArr(prev => changeActive(prev))
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