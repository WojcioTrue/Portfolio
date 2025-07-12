import CarouselSlideDisplay from "./CarouselSlideDisplay";
import useFirstLastActive from "../carouselHooks/useFirstLastActive";

const CarouselWrapper = () => {
  useFirstLastActive();

  return (
    <div className="relative flex w-[100%] max-w-[1200px] flex-row justify-center">
      <CarouselSlideDisplay />
    </div>
  );
};

export default CarouselWrapper;
