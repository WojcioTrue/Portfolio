import React from 'react'
import Slide from './slide/Slide'

const slideArray = [
  {text: 'first'},
  {text: 'second'}
]

const CarouselSlideDisplay = () => {
  return (
    <div className='bg-red-700 w-[200px] h-[200px] relative'>
      <Slide text={'x'}/>
    </div>
  )
}

export default CarouselSlideDisplay