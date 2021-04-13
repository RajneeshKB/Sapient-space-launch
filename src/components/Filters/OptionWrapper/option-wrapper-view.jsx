import React from "react";

const OptionWrapper = ({ label, children }) => {
  return (
    <div className="text-center px-3">
      <span>{label}</span>
      <hr className="m-0 mx-3" />
      <div className="d-flex flex-wrap mt-3 justify-content-around">
        {children}
      </div>
    </div>
  );
};

export default OptionWrapper;
