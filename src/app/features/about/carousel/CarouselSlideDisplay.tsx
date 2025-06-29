import { SlideArrayType } from './CarouselWrapper'
import Slide from './slide/Slide'

const CarouselSlideDisplay = ({ arr }: { arr: SlideArrayType[] }) => {
  
  return (
    <div className='bg-red-700 w-[200px] h-[200px] relative'>
      {arr.map((x, i) => <Slide key={i} text={x.text} x={x.x} index={i} opacity={x.visible ? 1 : 0} active={x.active}/>)}
    </div>
  )
}

export default CarouselSlideDisplay