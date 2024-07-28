import React from "react";
import Products from "./Products";
import ImageSlider from './ImageSlider'

const Home = () => {
  return (
    <div className="hero">
      <ImageSlider/>
      <Products />
    </div>
  );
};

export default Home;
