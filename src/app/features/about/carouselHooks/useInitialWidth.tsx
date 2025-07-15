import { useContext, useEffect } from "react";
import { CarouselContext } from "../carouselContext/CarouselContextProvider";

// pass prop between elements
const useInitialWidth = (gap: number) => {
  const { carouseElementsArr, carouselSlideDisplayRef } =
    useContext(CarouselContext);
  const { array, setArray } = carouseElementsArr;

  const gapValue = () => {
    if (typeof gap === "number" && isFinite(gap)) {
      return Number(gap.toFixed(0));
    } else {
      console.error(
        "please pass number value. Gap will be setted to default 0 value",
      );
      return 0;
    }
  };

  // initial width of slide Display element
  useEffect(() => {
    const displayWidth =
      carouselSlideDisplayRef?.current?.getBoundingClientRect().width;
    if (displayWidth !== undefined) {
      const newArr = array.elements.map((x, i) => {
        return {
          ...x,
          x: displayWidth * (i * 1),
        };
      });

      const modifiedArr = {
        width: displayWidth,
        gap: gapValue(),
        height: array.height,
        elements: [...newArr],
      };
      // if display is endabled, then width is updated
      setArray(modifiedArr);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setArray, carouselSlideDisplayRef]);
};

export default useInitialWidth;
