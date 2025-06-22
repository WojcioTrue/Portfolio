import React, { useContext } from 'react'
import { NavBarContext } from '../../navBarContext/NavBarContextProvider'

const useMobileLiRef = () => {
  const { mobileSkillsLi, mobileAboutLi, mobileTextLi, mobileSomethingLi } = useContext(NavBarContext)
  return (
    <div>useMobileLiRef</div>
  )
}

export default useMobileLiRef