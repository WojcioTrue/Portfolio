"use client"
import NavBarContextWrapper from "./features/navbar/NavBarContextWrapper";
import BackDropContext from "./features/navbar/mobileNavbar/backdrop/BackDropContext";

export default function Home() {

  return (
    <>
      <BackDropContext>
        <NavBarContextWrapper />
      </BackDropContext>
    </>
  );
}
