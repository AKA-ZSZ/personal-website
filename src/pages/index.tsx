import React from "react";
import AboutMe from "../components/aboutMe";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1>I’m in a layout!</h1>
      <AboutMe />
    </Layout>
  );
}
