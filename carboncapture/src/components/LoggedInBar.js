// LoggedInBar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const LoggedInBar = ({ handleLogout, handleAnotherAction }) => {
  return (
    <div className="navbar">
      <nav>
        {/* Add any navigation items if needed */}
      </nav>
      <div className="connect-button">
        <button>
          <FontAwesomeIcon icon={faWallet} />
        </button>
      </div>
    </div>
  );
}

export default LoggedInBar;
