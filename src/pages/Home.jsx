import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardsPanel from "../components/CardsPanel";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <CardsPanel />
      <Footer />
    </div>
  );
}

export default Home;
