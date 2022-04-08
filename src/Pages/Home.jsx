import React from "react";
import AboutUs from "../Components/AboutUs/AboutUs";
import BuySell from "../Components/BuySell/BuySell";
import Cards from "../Components/Cards/Cards";
import Dashboard from "../Components/DashBoard/Dashboard";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Patent from "../Components/Patent/Patent";
import SecondCard from "../Components/SecondCard/SecondCard";
import Strip from "../Components/Strip/Strip";
import ThirdCard from "../Components/ThirdCard/ThirdCard";
import TopNav from "../Components/TopNav/TopNav";
import Why from "../Components/Why/Why";

const Home = () => {
  return (
    <div>
      <TopNav />
      <NavBar />
      <Dashboard />
      <Strip />
      {/* <AboutUs /> */}
      <Why />
      <Cards />
      <BuySell />
      {/* <SecondCard />
      <Patent /> */}
      {/* <ThirdCard /> */}
      <Footer />
    </div>
  );
};

export default Home;
