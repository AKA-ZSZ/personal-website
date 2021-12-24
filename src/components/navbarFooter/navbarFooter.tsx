import React from "react";
import PrimaryButton from "../buttons/primaryButton";
import "./navbarFooter.scss";
import resume from "../../downloads/resume_zhentian.pdf";

const NavbarFooter = () => {
  return (
    <div id="navbarFooter">
      <div className="navbarFooter-container">
        <PrimaryButton onClick={() => window.open(resume)}>
          Download Resume
        </PrimaryButton>
      </div>
    </div>
  );
};

export default NavbarFooter;
