import Bottom from './Bottom'
import Top from './Top'
import useDefaultBackground from '../mobieNavBarHooks/useDefaultBackground'
const MobileAnimatedBg = () => {
  useDefaultBackground()
  return (
    <div className={`absolute top-0 h-[100%] w-full z-[-10]`}>
      <Top />
      <Bottom />
    </div>
  )
}

export default MobileAnimatedBg