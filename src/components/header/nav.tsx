import React from "react";
import { Logo } from "../icons/logo";
import SearchBar from "@theme/SearchBar";

export const NavBar = () => {
  return (
    <div
      style={{
        width: "100%", /* Make sure the navbar is responsive */
        height: "100px",
        border: "2px solid red",
        zIndex: 1000, /* Set a lower z-index for the navbar */
        position: "fixed", /* Keep it fixed like in your layout */
        top: 0,
        left: 0,
        right: 0,
      }}
      className="navContainer"
    >
      {/* <Logo /> */}
      <SearchBar />
    </div>
  );
};
