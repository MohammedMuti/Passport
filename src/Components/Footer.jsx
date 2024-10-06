import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <div>
      <div className="footer">
        <div className="icons">
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="disclaimer">
          <p>© Ministry of Interior - State of Kuwait - 2019</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
