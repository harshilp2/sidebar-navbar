import { Logo } from "../icons/logo";
import SearchBar from "@theme/SearchBar";

export const NavBar = () => {
  return (
    <div
      style={{ width: "400px", height: "100px", border: "2px solid red" }}
      className="navContainer"
    >
      {/* <Logo /> */}
      <SearchBar />
    </div>
  );
};
