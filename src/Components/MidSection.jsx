import React from "react";

function MidSection(props) {
  return (
    <div>
      <div className="mid-section">
        <div className="service-list">
          <ul>
            <li>
              <img src={require("../Assests/Icons/ico-apply.png")} alt="" />{" "}
              <p>Apply for Tourist e-Visa</p>
            </li>
            <li>
              <img src={require("../Assests/Icons/ico-enquire.png")} alt="" />{" "}
              <p>Enquire Tourist e-Visa Status</p>
            </li>
            <li>
              <img
                src={require("../Assests/Icons/ico-renew-residency.png")}
                alt=""
              />{" "}
              <p>Renew Residency</p>
            </li>
            <li>
              <img src={require("../Assests/Icons/ico-enquire.png")} alt="" />{" "}
              <p>Visa Application Status</p>
            </li>
            <li>
              <img
                src={require("../Assests/Icons/ico-procedures.png")}
                alt=""
              />{" "}
              <p>Residence Transactions</p>
            </li>
            <li>
              <img src={require("../Assests/Icons/ico-eform.png")} alt="" />{" "}
              <p>E-Forms</p>
            </li>
            <li>
              <img src={require("../Assests/Icons/ico-eform.png")} alt="" />{" "}
              <p>Ministerial Decree</p>
            </li>
          </ul>
        </div>
        <div className="main-form">
          <div className="inps">
            <input
              type="text"
              placeholder="Search by Passport Number"
              name=""
              id=""
            />
            <input
              type="text"
              name=""
              placeholder="Search by Visa Number:"
              id=""
            />
          </div>
          <div className="submit">
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
