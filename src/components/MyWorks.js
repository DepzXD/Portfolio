import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContainerStyle from "./styles/ContainerStyle";
import Portfolio from "./cards/Portfolio";
import Werecat from "./cards/Werecat";
import RudeWallet from "./cards/RudeWallet";
import Bot from "./cards/Bot";
const MyWorks = () => {
  gsap.registerPlugin(ScrollTrigger);
  const workRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      workRef.current,
      { autoAlpha: 0, y: 30 },
      {
        duration: 0.9,
        autoAlpha: 1,
        ease: "none",
        y: 0,
        scrollTrigger: workRef.current,
      }
    );
  });
  return (
    <ContainerStyle ref={workRef} id="Projects" className="auto">
      <h1>My Works</h1>
      <Portfolio />
      <Bot />
      <Werecat />
      <RudeWallet />
    </ContainerStyle>
  );
};

export default MyWorks;
