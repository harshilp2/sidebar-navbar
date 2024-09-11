import React from "react";
import { TopAlert } from "./topAlert";
import "../../css/header.css";

export const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <TopAlert />
    </div>
  );
};
