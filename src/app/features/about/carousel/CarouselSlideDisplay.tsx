import { useContext, useEffect, useState } from "react";
import { CarouselContext } from "../carouselContext/CarouselContextProvider";
import Slide from "./slide/Slide";
import CarouselSlideButton from "./CarouselSlideButton";
import useFirstLastActive from "../carouselHooks/useFirstLastActive";
import useChangeActive from "../carouselHooks/useChangeActive";
import useCarouselRightClick from "../carouselHooks/rightClick/useRightClick";
import useLeftClick from "../carouselHooks/leftClick/useLeftClick";

const CarouselSlideDisplay = () => {
  const {
    carouseElementsArr,
    carouselSlideDisplayRef,
    firstActive,
    lastActive,
  } = useContext(CarouselContext);
  const { array } = carouseElementsArr;
  const [display, setDisplay] = useState(false);
  const rightClick = useCarouselRightClick();
  const leftClick = useLeftClick();
  const { isFirstActive } = firstActive;
  const { isLastActive } = lastActive;
  const changeActive = useChangeActive();
  useFirstLastActive();

  useEffect(() => {
    if (array.height !== 0) {
      setDisplay(true);
    }
  }, [array]);

  const rightArrowClick = () => {
    rightClick();
    changeActive();
  };

  const leftArrowClick = () => {
    leftClick();
    changeActive();
  };

  return (
    <ul
      ref={carouselSlideDisplayRef}
      className="relative w-[80%] max-w-[480px] m-auto"
      style={{
        height: array.height
      }}
    >
      {array.elements.map((x, i) => (
        <Slide
          key={x.key}
          index={x.index}
          text={x.text}
          active={x.active}
          visible={x.visible}
        />
      ))}
      <CarouselSlideButton
        buttonClick={leftArrowClick}
        disabled={isFirstActive}
        text={"Left"}
      />
      <CarouselSlideButton
        buttonClick={rightArrowClick}
        disabled={isLastActive}
        text={"Right"}
      />
    </ul>
  );
};

export default CarouselSlideDisplay;
