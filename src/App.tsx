import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ContainerDiv } from "./components/Container.styled";
import Footer from "./components/footer.tsx/Footer";
import GlobalStyles from "./components/Global";
import Navbar from "./components/navbar.tsx/Navbar";
import { Object } from "./components/objects/Object";
import Section from "./components/section.tsx/Section";
import "./reset.css";

function App({ planetData }) {
  const [state, setState] = useState<any>(false);
  console.log(planetData);
  return (
    <>
      <GlobalStyles />
      <ContainerDiv>
        <Navbar state={state} setState={setState} object={Object} />
        <Section state={state} planetData={planetData} />
        <Footer planetData={planetData} />
      </ContainerDiv>
    </>
  );
}

export default App;
