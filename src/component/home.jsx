import React from "react";
import Header from "./header";
import Nav from "./nav";
import Contentsection from "./contentsection";
import Footer from "./footer";
import Aside from "./aside";
function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <Contentsection />
      <Aside />
      <Footer />
    </div>
  );
}

export default Home;
