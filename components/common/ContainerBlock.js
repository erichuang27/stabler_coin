import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContainerBlock({ children }) {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}

export default ContainerBlock;
