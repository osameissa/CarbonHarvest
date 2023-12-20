import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate(); // useNavigate replaces useHistory in React Router v6

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Redirect to the LoggedIn component
        navigate("/loggedIn");
      } catch (error) {
        console.error("Error connecting to MetaMask:", error.message);
      }
    } else {
      console.error("MetaMask not installed");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          navigate("/loggedIn");
        } else {
          navigate("/"); // Redirect to the home page if the user disconnects the wallet
        }
      });
    }
  }, [navigate]);

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="connect-button">
        <button onClick={connectToMetaMask}>Connect</button>
      </div>
    </div>
  );
}

export default Navbar;
