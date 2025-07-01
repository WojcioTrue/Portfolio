import { useContext } from 'react'
import { CarouselContext } from '../carouselContext/CarouselContextProvider'
import Slide from './slide/Slide'

const CarouselSlideDisplay = () => {
  const { carouseElementsArr, carouselSlideDisplayRef } = useContext(CarouselContext)
  const { array } = carouseElementsArr
  return (
    <div 
    ref={carouselSlideDisplayRef}
    className='bg-red-700 w-[200px] h-[200px] relative'>
      {array.map((x, i) => <Slide key={i} text={x.text} x={x.x} index={i} opacity={x.visible ? 1 : 0} active={x.active} />)}
    </div>
  )
}

export default CarouselSlideDisplay