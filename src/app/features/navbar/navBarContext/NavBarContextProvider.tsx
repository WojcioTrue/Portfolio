import React, { createContext } from 'react'
import { SetStateAction, Dispatch } from "react"
import { categories } from "../navItems"
import { ItemPositionType, IndicatorDesktopType, ListElement } from "../navBarTypes"



export const NavBarContext = createContext<{
  toogleMobileNav: {
      displayMenu: boolean,
      setDisplayMenu: Dispatch<SetStateAction<boolean>>
  },
  navBarDesktopPosition: {
      position: ItemPositionType
      setPosition: Dispatch<SetStateAction<ItemPositionType>>
  },
  indicatorDesktop: {
      indicatorPosition: IndicatorDesktopType,
      setIndicatorPosition: Dispatch<SetStateAction<IndicatorDesktopType>>
  },
  navBarMobilePosition: {
      position: ItemPositionType
      setPosition: Dispatch<SetStateAction<ItemPositionType>>
  }
  navBarItems: {
      listElements: ListElement[],
      setListElements: Dispatch<SetStateAction<ListElement[]>>,
      active: boolean,
      setActive: Dispatch<SetStateAction<boolean>>
  }
}>({
  toogleMobileNav: {
      displayMenu: false,
      setDisplayMenu: () => { }
  },
  navBarDesktopPosition: {
      position: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
      },
      setPosition: () => { }
  },
  indicatorDesktop: {
      indicatorPosition: {
          horizontalMid: 0,
          verticalMid: 0,
      },
      setIndicatorPosition: () => { }
  },
  navBarMobilePosition: {
      position: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
      },
      setPosition: () => { }
  },
  navBarItems: {
      listElements: categories,
      setListElements: () => { },
      active: false,
      setActive: () => { }
  }
})


const NavBarContextProvider = () => {
  return (
    <div>NavBarContextProvider</div>
  )
}

export default NavBarContextProvider