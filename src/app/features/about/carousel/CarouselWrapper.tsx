import React, { useState } from 'react'
import CarouselSlideDisplay from './CarouselSlideDisplay'

export type SlideArrayType = {
  text: string,
  x: number
}

const slideArray: SlideArrayType[] = [
  {
    text: 'first',
    x: 0
  },
  {
    text: 'second',
    x: 250
  },
  {
    text: 'third',
    x: 500
  }

]

const CarouselWrapper = () => {
  const [elArr, setElArr] = useState<SlideArrayType[]>(slideArray)

  const modifyArr = (x: SlideArrayType[]) => x.map((el) => {return {...el, el.x += 100}})

  const rightClick = () => {
    // setElArr(prev =>  )
  }

  return (
    <div className='relative flex flex-row justify-center bg-green-600 w-[100%] max-w-[1200px] overflow-hidden '>
      <CarouselSlideDisplay arr={elArr} />
      <div className='bg-white h-[50px] w-[50px] absolute left-0 top-1/2'>Left</div>
      <div className='bg-white h-[50px] w-[50px] absolute right-0 top-1/2'>right</div>
    </div>
  )
}

export default CarouselWrapper