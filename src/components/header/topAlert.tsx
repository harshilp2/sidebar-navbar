import { useState } from "react";
import { DeleteIcon } from "../icons";

export const TopAlert = () => {
  const [closed, setClosed] = useState<boolean>(
    Boolean(JSON.parse(localStorage.getItem("topAlert"))?.closed)
  );
  const handleClose = () => {
    setClosed(true);
    localStorage.setItem("topAlert", JSON.stringify({ closed: true }));
  };
  if (closed) return null;
  return (
    <div className="firstAlertTopContiner">
      <div className="topAlertContainer">
        <span onClick={handleClose}>
          <DeleteIcon className="alertDeleteIcon" />
        </span>
        <p className="alertText">
          This is the documentation for Hasura DDN, the future of data delivery.
          <span className="clickHereText">
            {" "}
            Click here for the Hasura v2.x docs.
          </span>
        </p>
        <div></div>
      </div>
    </div>
  );
};
