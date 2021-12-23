import React from "react";
import "./button.scss";
export default function PrimaryButton({
  children,
  onClick = () => {},
  type = undefined,
}) {
  return (
    <div className="button-container button-container-primary">
      <button
        className="button-primary"
        onClick={onClick}
        type={type || "button"}
      >
        {children}
      </button>
    </div>
  );
}
