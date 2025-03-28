

export const clickPromptCoords = (id : string) => {
  const element = document.getElementById(id)?.getBoundingClientRect()

  const coords = {
    top: element!.top,
    left: element!.left,
  }

  return coords
}