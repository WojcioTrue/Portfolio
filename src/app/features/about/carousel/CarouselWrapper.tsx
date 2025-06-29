import CarouselSlideDisplay from './CarouselSlideDisplay'
import useCarouselRightClick from '../carouselHooks/rightClick/useRightClick'
import useLeftClick from '../carouselHooks/leftClick/useLeftClick'
import useChangeActive from '../carouselHooks/useChangeActive'
import useFirstLastActive from '../carouselHooks/useFirstLastActive'
import CarouselButton from './CarouselButton'

export type SlideArrayType = {
  text: string,
  x: number,
  visible: boolean,
  active: boolean
}

const CarouselWrapper = () => {
  const rightClick = useCarouselRightClick()
  const leftClick = useLeftClick()
  const changeActive = useChangeActive()
  const { firstActive, lastActive } = useFirstLastActive()

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
        disabled={firstActive}
        text={'Left'}
      />
      <CarouselButton
        buttonClick={rightArrowClick}
        disabled={lastActive}
        text={'Right'}
      />
    </div>
  )
}

export default CarouselWrapper