import { useCallback, useContext } from 'react'
import { NavBarContext } from '../../navBarContext/NavBarContextProvider'

const useMobileLiRef = (section: string) => {
  const { mobileSkillsLi, mobileAboutLi, mobileTextLi, mobileSomethingLi } = useContext(NavBarContext)

  const mobileLiRef = useCallback((arg: string) => {
    if (arg === 'Skills') {
      return mobileSkillsLi
    } else if (arg === 'About') {
      return mobileAboutLi
    } else if (arg === 'Text') {
      return mobileTextLi
    } else if (arg === 'Something') {
      return mobileSomethingLi
    }
  }, [mobileAboutLi, mobileSkillsLi, mobileSomethingLi, mobileTextLi])

  return mobileLiRef(section)
}

export default useMobileLiRef