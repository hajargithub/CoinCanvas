import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import Global from "../Global";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform your logout logic here
    setIsLoggedIn(false);
  };

  const loginButton = (
    <button
      className="p-button p-button-rounded p-button-text"
      onClick={handleLogin}
    >
      Login
    </button>
  );

  const logoutButton = (
    <button
      className="p-button p-button-rounded p-button-text"
      onClick={handleLogout}
    >
      Logout
    </button>
  );

  const items = [
    {
      label: (
        <div className="logo">
          <img
            src="/CoinCanvas_Logo-removebg-preview.png"
            alt="CoinCanvas Logo"
            style={{ width: "50px", height: "auto" }}
          />
        </div>
      ),

      command: () => navigate("/"),
    },
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "About",
      icon: "pi pi-info-circle",
      command: () => navigate("/about"),
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      command: () => navigate("/contact"),
    },
    {
      label: "Exchanges",
      icon: "pi pi-chart-bar",
      command: () => navigate("/exchanges"),
    },
    {
      label: "Coins",
      icon: "pi pi-bitcoin",
      command: () => navigate("/coins"),
    },
    {
      label: isLoggedIn ? logoutButton : loginButton,
    },
  ];

  const navbarStyle = {
    height: "auto",
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <Menubar model={items} />
      <Global />
    </div>
  );
}

export default NavBar;
