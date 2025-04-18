

export const clickPromptCoords = (id : string) => {
  const element = document.getElementById(id)?.getBoundingClientRect()

  const coords = {
    top: element!.top,
    bottom: element!.bottom,
    left: element!.left,
    right: element!.right,
  }

  return coords
}