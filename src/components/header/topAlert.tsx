import { DeleteIcon } from "../icons";

export const TopAlert = () => {
  return (
    <div className="firstAlertTopContiner">
      <div className="topAlertContainer">
        <DeleteIcon className="alertDeleteIcon" />
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
