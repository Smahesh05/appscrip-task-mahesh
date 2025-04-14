import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import TopBar from "./TopBar/TopBar";
// import './MainHeader.css';

function MainHeader() {
  return (
    <div>
      <TopBar />
      <Header />
      <NavBar />
    </div>
  );
}

export default MainHeader;
