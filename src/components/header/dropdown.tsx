import { useState } from "react";
import { ArrowDown, RightArrow } from "../icons";
import { cn } from "@site/src/utils/cn";

const values = ["More", "Support", "FAQs"];

export const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(values[0]);
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div
      className="dropDown"
      onMouseOver={() => setOpenDropDown(true)}
      onMouseOut={() => setOpenDropDown(false)}
    >
      <div className="selectedDropDown">
       {selectedValue} <ArrowDown />
      </div>
      {openDropDown && (
        <div className="dropDownListContainer">
          <div className="dropDownValuesContainer">
            {values.map((val) => (
              <div
                onClick={() => setSelectedValue(val)}
                className={cn("dropDownValue", {
                  selectedOption: val === selectedValue,
                  pointer: val !== selectedValue,
                })}
              >
                {val}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
