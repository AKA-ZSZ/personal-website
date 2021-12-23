import React from "react";
import "./button.scss";
export default function PrimaryButton({ children, onClick }) {
  return (
    <div
      className="button-container button-container-primary"
      onClick={onClick}
    >
      <span className="button-primary">{children}</span>
    </div>
  );
}
