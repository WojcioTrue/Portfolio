import CarouselSlideDisplay from './CarouselSlideDisplay'
import useCarouselRightClick from '../carouselHooks/rightClick/useRightClick'
import useLeftClick from '../carouselHooks/leftClick/useLeftClick'
import useChangeActive from '../carouselHooks/useChangeActive'
import useFirstLastActive from '../carouselHooks/useFirstLastActive'
import CarouselButton from './CarouselButton'
import { CarouselContext } from '../carouselContext/CarouselContextProvider'
import { useContext } from 'react'

const CarouselWrapper = () => {
  const { firstActive, lastActive } = useContext(CarouselContext)
  const rightClick = useCarouselRightClick()
  const leftClick = useLeftClick()
  const { isFirstActive } = firstActive
  const { isLastActive } = lastActive
  const changeActive = useChangeActive()
  useFirstLastActive()

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
      <CarouselSlideDisplay />
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
    </div>
  )
}

export default CarouselWrapper