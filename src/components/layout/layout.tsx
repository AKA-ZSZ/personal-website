import React from "react";
import NavbarComponent from "../navbarComponent/navbarComponent";
import "./layout.scss";
export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <NavbarComponent />
      {children}
    </div>
  );
}
