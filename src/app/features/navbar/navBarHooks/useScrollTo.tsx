export const scrollToElement = (text: string) => {
    const scrollTo = document.getElementById(text)
    scrollTo?.scrollIntoView(
      {
        behavior: 'smooth',
        block: 'nearest'
      }
    )
  }