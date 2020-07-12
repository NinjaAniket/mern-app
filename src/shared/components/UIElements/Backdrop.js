import React from "react";
import ReactDOM from "react-dom";
import "./Backdrop.css";

const Backdrop = (props) => {
  const backdrop = (
    <div onClick={props.onClick} className="backdrop">
      {props.children}
    </div>
  );
  return ReactDOM.createPortal(
    backdrop,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
