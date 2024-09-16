import React from "react";
import Layout from "@theme-original/Layout";
import { TopAlert } from "@site/src/components/header/topAlert";
import { Logo } from "@site/src/components/icons/logo";
import { DocsSvg, AIlogo, ExploreButton, MenuIcon, RightArrow } from "@site/src/components/icons";
import { DropDown } from "@site/src/components/header/dropdown";
import SearchBar from "@theme/SearchBar";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function LayoutWrapper(props) {
  const navbarHeight = "80px"; // Define the height of your navbar here

  return (
    <>
      <Layout {...props}>
        <div className="headerContainer" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 70 }}>
          <TopAlert />
          <div className="mobileNavbar">
            <div className="mobileNavbarFirstSection">
              <MenuIcon />
              <Logo />
              <DocsSvg />
            </div>
            <div style={{ width: "50px" }}>
              <SearchBar />
            </div>
          </div>
          <div className="navBarContainer">
            <div className="navBarFirstSection">
              <Logo /> <DocsSvg />
              <div className="dropDownAndBtn">
                <button className="outlinedBtn">Tutorials</button>
                <DropDown />
              </div>
            </div>
            <div className="navBarSecondSection">
              <SearchBar />
              <button className="buttonAI"> <ExploreButton/>
                </button>
            </div>
            <div className="navBarLastSection">
              <button className="outlinedBtn">More</button>
              <button className="outlinedBtn">Testimonials</button>
              <button className="primaryBtn">
                Log in <RightArrow />
              </button>
            </div>
          </div>
        </div>
        {/* Add padding equal to the height of the navbar */}
        <div style={{ paddingTop: navbarHeight }}>
          {props.children}
        </div>
      </Layout>
    </>
  );
}
