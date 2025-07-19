import CarouselSlideDisplay from "./CarouselSlideDisplay";

const CarouselWrapper = () => {
  return (
    <div className="relative flex h-[100%] w-[100%] max-w-[1200px] flex-row justify-center">
      <CarouselSlideDisplay />
    </div>
  );
};

export default CarouselWrapper;
