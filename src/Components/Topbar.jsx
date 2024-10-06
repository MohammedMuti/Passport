import React from "react";

function Topbar(props) {
  return (
    <div>
      <div className="topbar">
        <div className="logo-img">
          <img src={require("../Assests/logo-moi.png")} alt="" />
        </div>
        <div className="text-img">
          <img src={require("../Assests/state-of-kuwait.png")} alt="" />
          <img src={require("../Assests/ministry-of-interior.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
