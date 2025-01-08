import Banner from "./features/main/Main";
import Tech from "./features/technologies/Tech";
import NavBarContextWrapper from "./features/navbar/NavBarContextWrapper";
import { createContext, useState } from "react";

export const blurPage = createContext(false)

export default function Home() {
  const [blurPage, setBlurPage] = useState<boolean>(false)
  return (
    <>
      <NavBarContextWrapper />
      <span className={blurPage ? "blur-sm" : ""}>
        <Banner />
        <Tech />
      </span>
    </>
  );
}
