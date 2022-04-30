import React from "react";
import About from "../components/pageSections/About";
import DividerMessage from "../components/common/DividerMessage";
import Playlist from "../components/pageSections/Playlist";
import Profiles from "../components/pageSections/Profiles";
import Welcome from "../components/pageSections/Welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
    </>
  );
}
