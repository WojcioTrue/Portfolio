import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

type BlurPageType = {
  blurPage: {
    isBlur: boolean;
    setIsBlur: Dispatch<SetStateAction<boolean>>;
  };
};

export const BlurPage = createContext<BlurPageType>({
  blurPage: {
    isBlur: false,
    setIsBlur: () => {},
  },
});

type ChildrenType = {
  children: React.ReactNode;
};

const BackDropContext = ({ children }: ChildrenType) => {
  const [isBlur, setIsBlur] = useState<boolean>(false);
  return (
    <BlurPage.Provider
      value={{
        blurPage: {
          isBlur,
          setIsBlur,
        },
      }}
    >
      {children}
    </BlurPage.Provider>
  );
};

export default BackDropContext;
