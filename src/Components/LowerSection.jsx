import React from "react";

function LowerSection(props) {
  return (
    <div>
      <div className="lower-section">
        <div className="fines">
          <div className="img-container">
            <img src={require("../Assests/LowerIcons/kd.png")} alt="" />
          </div>
          <div className="fine-section">
            <h3>Pay Fines</h3>
            <img
              src={require("../Assests/LowerIcons/ico-horizontal-bar.png")}
              alt=""
            />
            <div className="inps">
              <select name="" id="">
                <option value="">Traffic</option>
                <option value="">Residency</option>
              </select>
              <input type="text" placeholder="civil Id" name="" id="" />
              <button>Pay</button>
            </div>
          </div>
        </div>

        <div className="icon-container">
          <img src={require("../Assests/LowerIcons/sms.png")} alt="" />
        </div>

        <div className="icon-container">
          <img src={require("../Assests/LowerIcons/doc-icon.png")} alt="" />
        </div>

        <div className="icon-container">
          <img src={require("../Assests/LowerIcons/Eservice.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LowerSection;
