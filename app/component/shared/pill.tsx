import React from "react";

const PillButton = ({ value }) => {
  return (
    <button
      type="button"
      className="py-1.5 px-2.5 md:py-2.5 md:px-5 me-2 mb-2 text-[10px] lg:text-sm font-medium text-white focus:outline-none bg-[#ffffff1a] rounded-full  "
    >
      {value}
    </button>
  );
};

export default PillButton;
