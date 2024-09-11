import React from "react";

export const DeleteIcon: React.FC<{ className? }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      className={className}
      viewBox="0 0 32 32"
    >
      <rect width="32" height="32" fill="#F3F4F6" rx="16"></rect>
      <path
        stroke="#1F2A37"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21.714 10.286 10.285 21.714m0-11.428 11.429 11.428"
      ></path>
    </svg>
  );
};
