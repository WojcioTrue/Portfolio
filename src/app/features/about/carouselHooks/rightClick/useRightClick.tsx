import { useContext } from "react";
import { CarouselContext } from "../../carouselContext/CarouselContextProvider";
import { SlideArrayType } from "../../carouselContext/slidesArray";

const useCarouselRightClick = () => {
  const { carouseElementsArr } = useContext(CarouselContext);
  const { array, setArray } = carouseElementsArr;

  const rightClickEffect = (arg: SlideArrayType) => {
    const modifiedX = arg.elements.map((el) => {
      if (el.index <= 0) {
        return {
          ...el,
          index: el.index - 1,
          visible: false,
        };
      } else {
        return {
          ...el,
          index: el.index - 1,
        };
      }
    });
    const newArr = {
      ...array,
      elements: [...modifiedX],
    };
    return newArr;
  };

  const modifyArrRight = () => {
    setArray((prev) => rightClickEffect(prev));
  };
  return modifyArrRight;
};

export default useCarouselRightClick;
