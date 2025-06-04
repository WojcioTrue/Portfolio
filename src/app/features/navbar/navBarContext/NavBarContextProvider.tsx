"use client"
import { SetStateAction, Dispatch, useRef } from "react"
import { useState, createContext } from "react"
import { categories } from "../navItems"
import { ItemPositionType, IndicatorDesktopType, ListElement } from "../navBarTypes"

const NavBarContext = createContext<{
  defaultIndicatorRef: React.RefObject<HTMLLIElement | HTMLDivElement> | undefined,
  skillsIndicatorRef: React.RefObject<HTMLLIElement | HTMLDivElement> | undefined,
  aboutIndicatorRef: React.RefObject<HTMLLIElement | HTMLDivElement> | undefined,
  textIndicatorRef: React.RefObject<HTMLLIElement | HTMLDivElement> | undefined,
  somethingIndicatorRef: React.RefObject<HTMLLIElement | HTMLDivElement> | undefined,
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
  disableBg: {
    disable: boolean,
    setDisable: Dispatch<SetStateAction<boolean>>
  }
}>({
  defaultIndicatorRef: undefined,
  skillsIndicatorRef: undefined,
  aboutIndicatorRef: undefined,
  textIndicatorRef: undefined,
  somethingIndicatorRef: undefined,
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
  },
  disableBg: {
    disable: false,
    setDisable: () => { }
  }
})

export type ChildrenType = {
  children: React.ReactNode
}

const NavBarContextProvider = ({ children }: ChildrenType) => {
  // state for context
  const [displayMenu, setDisplayMenu] = useState<boolean>(false)
  const defaultIndicatorRef = useRef<HTMLLIElement | HTMLDivElement | null>(null)
  const skillsIndicatorRef = useRef<HTMLLIElement | HTMLDivElement | null>(null)
  const aboutIndicatorRef = useRef<HTMLLIElement | HTMLDivElement | null>(null)
  const textIndicatorRef = useRef<HTMLLIElement | HTMLDivElement | null>(null)
  const somethingIndicatorRef = useRef<HTMLLIElement | HTMLDivElement | null>(null)
  //state for changing menu to fixed
  const [navBarDesktopPosition, setNavBarDesktopPosition] = useState<ItemPositionType>(
    {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    })
  const [navBarMobilePosition, setNavBarMobilePosition] = useState<ItemPositionType>(
    {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    })
  const [listElements, setListElements] = useState<ListElement[]>(categories)
  const [iDesktopPosition, setIDesktopPosition] = useState<IndicatorDesktopType>({
    horizontalMid: 0,
    verticalMid: 23,
  })
  const [active, setActive] = useState(false)
  const [disable, setDisable] = useState(false)

  return (
    <NavBarContext.Provider value={
      {
        defaultIndicatorRef,
        skillsIndicatorRef,
        aboutIndicatorRef,
        textIndicatorRef,
        somethingIndicatorRef,
        toogleMobileNav: { displayMenu, setDisplayMenu },
        navBarDesktopPosition: {
          position: navBarDesktopPosition,
          setPosition: setNavBarDesktopPosition,
        },
        indicatorDesktop: {
          indicatorPosition: iDesktopPosition,
          setIndicatorPosition: setIDesktopPosition,
        },
        navBarMobilePosition: {
          position: navBarMobilePosition,
          setPosition: setNavBarMobilePosition,
        },
        navBarItems: {
          listElements,
          setListElements,
          active,
          setActive,
        },
        disableBg: {
          disable,
          setDisable
        }
      }}>
      {children}
    </NavBarContext.Provider>

  )
}

export { NavBarContext, NavBarContextProvider }