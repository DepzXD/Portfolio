import React, { useRef, useEffect } from "react";
import ContainerStyle from "./styles/ContainerStyle";
import Portfolio from "./cards/Portfolio";
import Werecat from "./cards/Werecat";
import RudeWallet from "./cards/RudeWallet";
import Bot from "./cards/Bot";
const MyWorks = () => {
  return (
    <ContainerStyle id="Projects" className="auto">
      <h1>My Works</h1>
      <Portfolio />
      <Bot />
      <Werecat />
      <RudeWallet />
    </ContainerStyle>
  );
};

export default MyWorks;
