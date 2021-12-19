import React from "react";
import "./button.scss";
export default function PrimaryButton({ children }) {
  return (
    <div className="button-container button-container-primary">
      <span className="button-primary">{children}</span>
    </div>
  );
}
