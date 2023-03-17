import React from "react";
import Jupiter from "../../assets/planet-jupiter.svg";
import { useState } from "react";
import {
  Img,
  ImgDiv,
  LinkDiv,
  LinkH1,
  LinkH1Div,
  Number1div,
  PlanetLinkwikipedia,
  PlanetName,
  PlanetText,
  SectionDiv,
  TextDiv,
} from "./Section.styled";

const Section = ({ state, planetData }) => {
  let x = [];

  console.log(planetData.sectionColor);
  const [numbers, setNumbers] = useState(1);
  if (numbers == 1) {
    x[0] = planetData.overview.content;
    x[1] = planetData.overview.image;
  }
  if (numbers == 2) {
    x[0] = planetData.structure.content;
    x[1] = planetData.structure.image;
  }
  if (numbers == 3) {
    x[0] = planetData.geology.content;
    x[1] = planetData.geology.geo;
  }

  return (
    <SectionDiv>
      <ImgDiv>
        <Img src={x[1]} planetData={planetData} />
      </ImgDiv>

      <Number1div>
        <LinkDiv>
          <LinkH1Div
            onClick={() => setNumbers(1)}
            style={
              numbers == 1
                ? { borderBottom: `4px solid ${planetData.sectionColor}` }
                : {}
            }
            planetData={planetData}
          >
            <LinkH1>OVERVIEW</LinkH1>
          </LinkH1Div>
          <LinkH1Div
            onClick={() => setNumbers(2)}
            numbers={numbers}
            style={
              numbers == 2
                ? {
                    borderBottom: `4px solid ${planetData.sectionColor}`,
                  }
                : {}
            }
            planetData={planetData}
          >
            <LinkH1>STRUCTURE</LinkH1>
          </LinkH1Div>
          <LinkH1Div
            onClick={() => setNumbers(3)}
            numbers={numbers}
            style={
              numbers == 3
                ? { borderBottom: `4px solid ${planetData.sectionColor}` }
                : {}
            }
            planetData={planetData}
          >
            <LinkH1>SURFACE</LinkH1>
          </LinkH1Div>
        </LinkDiv>
        <TextDiv>
          <PlanetName>{planetData.name}</PlanetName>
          <PlanetText>{x[0]}</PlanetText>

          <a href={planetData.overview.source}>
            <PlanetLinkwikipedia>Source: Wikipedia</PlanetLinkwikipedia>
          </a>
        </TextDiv>
      </Number1div>
    </SectionDiv>
  );
};

export default Section;
