import React from "react";
import {
  InformationChildren,
  InformationChildrennn,
  InformationH1,
  InformationH2,
  InormationDiv,
} from "./Footer.styled";

const Footer = ({ planetData }) => {
  return (
    <InormationDiv>
      <InformationChildren>
        <InformationChildrennn>
          <InformationH1>ROTATION TIME</InformationH1>
          <InformationH2>{planetData.rotation}</InformationH2>
        </InformationChildrennn>
      </InformationChildren>

      <InformationChildren>
        <InformationChildrennn>
          <InformationH1>REVOLUTION TIME</InformationH1>
          <InformationH2>{planetData.revolution}</InformationH2>
        </InformationChildrennn>
      </InformationChildren>
      <InformationChildren>
        <InformationChildrennn>
          <InformationH1>RADIUS</InformationH1>
          <InformationH2>{planetData.radius}</InformationH2>
        </InformationChildrennn>
      </InformationChildren>
      <InformationChildren>
        <InformationChildrennn>
          <InformationH1>AVERAGE TEMP.</InformationH1>
          <InformationH2>{planetData.temperature}</InformationH2>
        </InformationChildrennn>
      </InformationChildren>
    </InormationDiv>
  );
};

export default Footer;
