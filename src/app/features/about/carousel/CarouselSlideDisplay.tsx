import { useContext, useEffect, useState } from 'react'
import { CarouselContext } from '../carouselContext/CarouselContextProvider'
import Slide from './slide/Slide'
import useInitialWidth from '../carouselHooks/useInitialWidth'
import useResponsiveWidth from '../carouselHooks/useResponsiveWidth'
import CarouselButton from './CarouselButton'
import useFirstLastActive from '../carouselHooks/useFirstLastActive'
import useChangeActive from '../carouselHooks/useChangeActive'
import useCarouselRightClick from '../carouselHooks/rightClick/useRightClick'
import useLeftClick from '../carouselHooks/leftClick/useLeftClick'

const CarouselSlideDisplay = () => {
  const { carouseElementsArr, carouselSlideDisplayRef, firstActive, lastActive } = useContext(CarouselContext)
  const { array } = carouseElementsArr
  const [display, setDisplay] = useState(false)
  const { gap } = array
  const rightClick = useCarouselRightClick()
  const leftClick = useLeftClick()
  const { isFirstActive } = firstActive
  const { isLastActive } = lastActive
  const changeActive = useChangeActive()
  useFirstLastActive()
  useInitialWidth(25)
  useResponsiveWidth()

  useEffect(() => {
    if (array.width !== 0) {
      setDisplay(true)
    }
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
    <ul
      ref={carouselSlideDisplayRef}
      className='relative w-[80%] max-w-[380px] h-[400px]'>
      {display && array.elements.map((x, i) =>
        <Slide
          key={x.key}
          index={x.index}
          text={x.text}
          x={x.x}
          gap={gap}
          active={x.active}
          visible={x.visible}
        />)}
      <CarouselButton
        buttonClick={leftArrowClick}
        disabled={isFirstActive}
        text={'Left'}
      />
      <CarouselButton
        buttonClick={rightArrowClick}
        disabled={isLastActive}
        text={'Right'}
      />
    </ul>
  )
}

export default CarouselSlideDisplay