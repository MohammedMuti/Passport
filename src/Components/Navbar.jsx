import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="navbar">
        <ul className={active ? "switch" : ""}>
          <li className="bars">
            <FontAwesomeIcon onClick={() => setActive(!active)} icon={faBars} />
          </li>
          <li className="active">Home</li>
          <li>E-Services</li>
          <li>Related Departments</li>
          <li>E-Magazine</li>
          <li>News Archive</li>
          <li>Your Opinion</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
