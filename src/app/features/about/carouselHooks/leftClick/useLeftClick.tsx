import { useContext } from "react";
import { CarouselContext } from "../../carouselContext/CarouselContextProvider";
import { SlideArrayType } from "../../carouselContext/slidesArray";

const useLeftClick = () => {
  const { carouseElementsArr } = useContext(CarouselContext);
  const { array, setArray } = carouseElementsArr;

  const leftClickEffect = (arg: SlideArrayType) => {
    const modifiedX = arg.elements.map((el) => {
      if (el.index >= -1) {
        return {
          ...el,
          index: el.index + 1,
          visible: true,
        };
      } else {
        return {
          ...el,
          index: el.index + 1,

        };
      }
    });
    const newArr = {
      ...array,
      elements: [...modifiedX],
    };
    return newArr;
  };

  const leftClick = () => {
    setArray((prev) => leftClickEffect(prev));
  };

  return leftClick;
};

export default useLeftClick;
