import CarouselSlideDisplay from './CarouselSlideDisplay'
import useFirstLastActive from '../carouselHooks/useFirstLastActive'

const CarouselWrapper = () => {
  useFirstLastActive()

  return (
    <div className='relative flex flex-row justify-center w-[100%] max-w-[1200px]'>
      <CarouselSlideDisplay />
    </div>
  )
}

export default CarouselWrapper