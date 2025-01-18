"use client"
import MainLayoutWrapper from "./features/MainLayoutWrapper";
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
