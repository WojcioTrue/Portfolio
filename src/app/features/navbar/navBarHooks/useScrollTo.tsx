export const scrollToElement = (text: string) => {
    const scrollTo = document.getElementById(text)
    scrollTo?.scrollIntoView(
      {
        behavior: 'instant',
        block: 'nearest'
      }
    )
  }