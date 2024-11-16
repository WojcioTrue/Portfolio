import Banner from "./features/main/Main";
import Tech from "./features/technologies/Tech";
import NavBarContextWrapper from "./features/navbar/NavBarContextWrapper";

export default function Home() {
  return (
    <>
      <NavBarContextWrapper />
      <Banner />
      <Tech />
    </>
  );
}
