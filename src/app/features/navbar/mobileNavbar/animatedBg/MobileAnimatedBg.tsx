import Bottom from './Bottom'
import Top from './Top'
import useDefaultBackground from '../mobieNavBarHooks/useDefaultBackground'
import { useContext } from 'react'
import { NavBarContext } from '../../navBarContext/NavBarContextProvider'

const MobileAnimatedBg = () => {
  const { navBarItems } = useContext(NavBarContext)
  const activeLi = navBarItems.listElements.filter(x => x.active === true) 
  console.log(activeLi)
  useDefaultBackground(activeLi)

  return (
    <div className={`absolute top-0 h-[100%] w-full z-[-10]`}>
      <Top />
      <Bottom />
    </div>
  )
}

export default MobileAnimatedBg