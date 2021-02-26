import React from "react";
import HeroSection from "../../Components/HeroSection";
import Card from "../../Components/Card/Cards";
import Footer from "../../Components/Footer";

import { IMAGES } from "../../Configs";

export default function component() {
  return (
    <div>
      <HeroSection
        images={IMAGES.KANOPI}
        title="BENGKEL LAS"
        subTitle="Test Descrip"
        getStarted
      />
      <Card />
      <Footer />
    </div>
  );
}
