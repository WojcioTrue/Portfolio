"use client"
import { SetStateAction, Dispatch, useRef, ReactNode } from "react"
import { useState, createContext } from "react"
import { categories } from "../navItems"
import { ItemPositionType, IndicatorDesktopType, ListElement } from "../navBarTypes"

const NavBarContext = createContext<{
  // refs for sections in DOM 
  defaultSectionRef: React.RefObject<HTMLDivElement> | undefined,
  skillsSectionRef: React.RefObject<HTMLDivElement> | undefined,
  aboutSectionRef: React.RefObject<HTMLDivElement> | undefined,
  textSectionRef: React.RefObject<HTMLDivElement> | undefined,
  somethingSectionRef: React.RefObject<HTMLDivElement> | undefined,
  // refs for indicator's points in navbar
  defaultIndicatorRef: React.RefObject<HTMLSpanElement | HTMLDivElement> | undefined,
  skillsIndicatorRef: React.RefObject<HTMLSpanElement | HTMLDivElement> | undefined,
  aboutIndicatorRef: React.RefObject<HTMLSpanElement | HTMLDivElement> | undefined,
  textIndicatorRef: React.RefObject<HTMLSpanElement | HTMLDivElement> | undefined,
  somethingIndicatorRef: React.RefObject<HTMLSpanElement | HTMLDivElement> | undefined,
  // refs for li elements in navbar
  defaultLiRef: React.RefObject<HTMLLIElement | HTMLDivElement> | undefined,
  skillsLiRef: React.RefObject<HTMLLIElement | HTMLDivElement> | undefined,
  aboutLiRef: React.RefObject<HTMLLIElement | HTMLDivElement> | undefined,
  textLiRef: React.RefObject<HTMLLIElement | HTMLDivElement> | undefined,
  somethingLiRef: React.RefObject<HTMLLIElement | HTMLDivElement> | undefined,
  //refs for menu
  // navBar UList reference
  navRef: React.RefObject<HTMLUListElement> | undefined,
  /// mobile navBar reference
  mobileNavBarRef: React.RefObject<HTMLDivElement> | undefined,
  /// mobile navbar label
  mobileNavLabelRef: React.RefObject<HTMLLabelElement> | undefined,
  /// mobile navbar list element
  mobileSkillsLi: React.RefObject<HTMLLIElement> | undefined,
  mobileAboutLi: React.RefObject<HTMLLIElement> | undefined,
  mobileTextLi: React.RefObject<HTMLLIElement> | undefined,
  mobileSomethingLi: React.RefObject<HTMLLIElement> | undefined,
  /////////////////////////////////////////////
  // mobile toggle ref
  toogleMobileNav: {
    displayMenu: boolean,
    backdropRef: React.RefObject<HTMLDivElement> | undefined,
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
  ////////////////////////////////////////////////

  // refs for sections in DOM 
  defaultSectionRef: undefined,
  skillsSectionRef: undefined,
  aboutSectionRef: undefined,
  textSectionRef: undefined,
  somethingSectionRef: undefined,
  // refs for indicator's points in navbar
  defaultIndicatorRef: undefined,
  skillsIndicatorRef: undefined,
  aboutIndicatorRef: undefined,
  textIndicatorRef: undefined,
  somethingIndicatorRef: undefined,
  // refs for li elements in navbar
  defaultLiRef: undefined,
  skillsLiRef: undefined,
  aboutLiRef: undefined,
  textLiRef: undefined,
  somethingLiRef: undefined,
  // navBar UList  reference
  navRef: undefined,
  /// mobile navBar reference
  mobileNavBarRef: undefined,
  /// mobile navbar label
  mobileNavLabelRef: undefined,
  /// mobile navbar list element
  mobileSkillsLi: undefined,
  mobileAboutLi: undefined,
  mobileTextLi: undefined,
  mobileSomethingLi: undefined,
  /////////////////////////////////////////////
  toogleMobileNav: {
    displayMenu: false,
    backdropRef: undefined,
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
  // toggleMobieNav
  const [displayMenu, setDisplayMenu] = useState<boolean>(false)
  const backdropRef = useRef<HTMLDivElement | null>(null)
  //sections Ref
  const defaultSectionRef = useRef<HTMLDivElement | null>(null)
  const skillsSectionRef = useRef<HTMLDivElement | null>(null)
  const aboutSectionRef = useRef<HTMLDivElement | null>(null)
  const textSectionRef = useRef<HTMLDivElement | null>(null)
  const somethingSectionRef = useRef<HTMLDivElement | null>(null)
  //indicators Ref
  const defaultIndicatorRef = useRef<HTMLSpanElement | HTMLDivElement | null>(null)
  const skillsIndicatorRef = useRef<HTMLSpanElement | HTMLDivElement | null>(null)
  const aboutIndicatorRef = useRef<HTMLSpanElement | HTMLDivElement | null>(null)
  const textIndicatorRef = useRef<HTMLSpanElement | HTMLDivElement | null>(null)
  const somethingIndicatorRef = useRef<HTMLSpanElement | HTMLDivElement | null>(null)
  // menu li refs
  const defaultLiRef = useRef<HTMLLIElement | HTMLDivElement | null>(null)
  const skillsLiRef = useRef<HTMLLIElement | HTMLDivElement | null>(null)
  const aboutLiRef = useRef<HTMLLIElement | HTMLDivElement | null>(null)
  const textLiRef = useRef<HTMLLIElement | HTMLDivElement | null>(null)
  const somethingLiRef = useRef<HTMLLIElement | HTMLDivElement | null>(null)
  const navRef = useRef<HTMLUListElement | null>(null)
  /// mobile navBar reference
  const mobileNavBarRef = useRef<HTMLDivElement | null>(null)
  /// mobile navbar label Ref
  const mobileNavLabelRef = useRef<HTMLLabelElement | null>(null)
  // mobile navbar Li //////////////////////
  const mobileSkillsLi = useRef<HTMLLIElement | null>(null)
  const mobileAboutLi = useRef<HTMLLIElement | null>(null)
  const mobileTextLi = useRef<HTMLLIElement | null>(null)
  const mobileSomethingLi = useRef<HTMLLIElement | null>(null)
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
        //section ref's
        defaultSectionRef,
        skillsSectionRef,
        aboutSectionRef,
        textSectionRef,
        somethingSectionRef,
        //indicator's ref
        defaultIndicatorRef,
        skillsIndicatorRef,
        aboutIndicatorRef,
        textIndicatorRef,
        somethingIndicatorRef,
        // navbar li refs
        defaultLiRef,
        skillsLiRef,
        aboutLiRef,
        textLiRef,
        somethingLiRef,
        // navbar ref
        navRef,
        /// mobile navBar reference
        mobileNavBarRef,
        //// mobile references
        mobileNavLabelRef,
        mobileSkillsLi,
        mobileAboutLi,
        mobileTextLi,
        mobileSomethingLi,
        /////////////////////////////////////////////
        toogleMobileNav: { displayMenu, backdropRef, setDisplayMenu },
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