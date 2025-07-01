import { useContext, useEffect } from 'react'
import { CarouselContext } from '../carouselContext/CarouselContextProvider'
import Slide from './slide/Slide'

const CarouselSlideDisplay = () => {
  const { carouseElementsArr, carouselSlideDisplayRef } = useContext(CarouselContext)
  const { array } = carouseElementsArr
  
  useEffect(() => {
    console.log(carouselSlideDisplayRef?.current?.clientWidth)
  },[carouselSlideDisplayRef])

  return (
    <div 
    ref={carouselSlideDisplayRef}
    className='bg-red-700 w-[200px] h-[200px] relative'>
      {array.map((x, i) => <Slide key={i} text={x.text} index={i} opacity={x.visible ? 1 : 0} active={x.active} gap={x.x} />)}
    </div>
  )
}

export default CarouselSlideDisplay