

export const clickPromptCoords = () => {
  const element = document.getElementById('drag-target')?.getBoundingClientRect()

  const coords = {
    top: element!.top,
    left: element!.left,
  }

  console.log(coords)
  return coords
}