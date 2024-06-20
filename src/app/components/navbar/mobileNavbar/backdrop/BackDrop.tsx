useContext
import { useContext } from 'react'
import { NavBarContext } from '../../NavBar'

const BackDrop = () => {
  const { displayMenu } = useContext(NavBarContext)
  return (
   <div className={`backdrop h-screen w-screen bg-slate-600 ${displayMenu && 'backdrop-open'} fixed z-10 top-0 left-0`}></div>
  )
}

export default BackDrop