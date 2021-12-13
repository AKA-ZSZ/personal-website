import React from "react";
import Navbar from "./navbar";
export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Navbar />
      {children}
    </div>
  );
}
