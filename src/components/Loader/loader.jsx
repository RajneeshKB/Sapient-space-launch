import React from "react";
import ReactDOM from "react-dom";
import "./loader.scss";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="backdrop position-absolute">
      <div className="loader-container position-fixed">
        <div className="spinner-border"></div>
      </div>
    </div>,
    document.getElementById("loader-hook")
  );
};

export default Loader;
