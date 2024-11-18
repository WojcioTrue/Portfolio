export type NavBarListElementType = {
    text: string,
    id: string,
    isActive: boolean
    image?: string,
  }

  export type ItemPositionType = {
    left: number,
    right: number,
    top: number,
    bottom: number
}

export type IndicatorDesktopType = {
    horizontalMid: number,
    verticalMid: number,
}

export type ListElement = {
  section: string,
  active: boolean
}