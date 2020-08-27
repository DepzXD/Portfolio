import React from "react";
import { css } from "@emotion/core";
import ContainerStyle from "./styles/ContainerStyle";
import Portfolio from "./cards/Portfolio";
import Werecat from "./cards/Werecat";
import RudeWallet from "./cards/RudeWallet";
import TicTacToe from "./cards/TicTacToe";
import Bot from "./cards/Bot";

const MyWorks = () => {
  return (
    <ContainerStyle id="Projects" className="auto">
      <h1>My Works</h1>
      <Portfolio />
      <Bot />
      <Werecat />
      <TicTacToe />
      <RudeWallet />
    </ContainerStyle>
  );
};

export default MyWorks;
