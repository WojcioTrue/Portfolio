import React, { useContext, useEffect, useState } from 'react'
import CarouselSlideDisplay from './CarouselSlideDisplay'
import { CarouselContext } from '../carouselContext/CarouselContextProvider'
import useCarouselRightClick from '../carouselHooks/rightClick/useRightClick'
import useLeftClick from '../carouselHooks/leftClick/useLeftClick'
import useChangeActive from '../carouselHooks/useChangeActive'

export type SlideArrayType = {
  text: string,
  x: number,
  visible: boolean,
  active: boolean
}

const CarouselWrapper = () => {
  const { carouseElementsArr } = useContext(CarouselContext)
  const { array } = carouseElementsArr
  const [lastActive, setLastActive] = useState<boolean>(false)
  const [firstActive, setFirstActive] = useState<boolean>(true)
  const rightClick = useCarouselRightClick()
  const leftClick = useLeftClick()
  const changeActive = useChangeActive()

  useEffect(() => {
    const lastActive = array[array.length - 1].active === true ? true : false
    const firstActive = array[0].active === true ? true : false
    setLastActive(lastActive)
    setFirstActive(firstActive)
  }, [array])

  const rightArrowClick = () => {
    rightClick()
    changeActive()
  }

  const leftArrowClick = () => {
    leftClick()
    changeActive()
  }

  return (
    <div className='relative flex flex-row justify-center bg-green-600 w-[100%] max-w-[1200px] overflow-hidden '>
      <CarouselSlideDisplay arr={array} />

      <button
        onClick={() => leftArrowClick()}
        disabled={firstActive}
        className='h-[50px] w-[50px] absolute left-0 top-1/2'
        style={{
          backgroundColor: firstActive ? 'red' : 'white'
        }}
      >left
      </button>

      <button
        onClick={() => rightArrowClick()}
        disabled={lastActive}
        className='h-[50px] w-[50px] absolute right-0 top-1/2'
        style={{
          backgroundColor: lastActive ? 'red' : 'white'
        }}
      >right</button>

    </div>
  )
}

export default CarouselWrapper