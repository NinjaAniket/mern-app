import React from "react";
import "./MainHeader.css";

function MainHeader(props) {
  return <div className="main-header">{props.children}</div>;
}

export default MainHeader;
