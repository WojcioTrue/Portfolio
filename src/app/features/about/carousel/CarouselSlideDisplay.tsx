import Slide from './slide/Slide'

const slideArray = [
  {
    text: 'first',
    x: 0
  },
  {
    text: 'second',
    x: 250
  }
]

const CarouselSlideDisplay = () => {
  return (
    <div className='bg-red-700 w-[200px] h-[200px] relative'>
      {slideArray.map((x,i) => <Slide key={i} text={x.text} x={x.x}/>)}
    </div>
  )
}

export default CarouselSlideDisplay