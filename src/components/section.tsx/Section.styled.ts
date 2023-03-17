import styled from "styled-components";

export const SectionDiv = styled.div`
  width: 100%;
  margin-top: 16px;
`;

//Linkebis elementi
export const LinkDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  /* border: 1px solid #ffffff; */

  @media (min-width: 768px) {
    height: 152px;
    width: 281px;
    flex-direction: column;
    gap: 16px;
  }

  @media (min-width: 1440px) {
    height: 176px;
    width: 350px;
    margin-top: 50px;
  }
`;

export const LinkH1Div = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  /* border-bottom: 4px solid #419ebb; */

  @media (min-width: 768px) {
    width: 100%;
    border: 1px solid #ffffff;
    border-bottom: "";

    &:hover {
      background-color: ${({ planetData }) => planetData.sectionColor};
      transition: 0;
    }
  }
  @media (max-width: 768px) {
    &:hover {
      border-bottom: 4px solid ${({ planetData }) => planetData.sectionColor};
    }
  }
`;

export const LinkH1 = styled.h1`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  color: #ffffff;
`;

//image element

export const ImgDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 355px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 460px;
  }
  @media (min-width: 1440px) {
    height: 700px;
    width: 953px;
  }
`;
export const Img = styled.img<any>`
  width: ${({ planetData }) => planetData.mobileImgWidth};
  height: ${({ planetData }) => planetData.mobileImgWidth};

  @media (min-width: 768px) {
    width: ${({ planetData }) => planetData.tabletImgWidth};
    height: ${({ planetData }) => planetData.tabletImgWidth};
  }
  @media (min-width: 1440px) {
    width: ${({ planetData }) => planetData.desktopImgWidth};
    height: ${({ planetData }) => planetData.desktopImgWidth};
  }
`;
//name,text element
export const TextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 16px;
  margin-top: 304px;
  @media (min-width: 768px) {
    width: 339px;
    align-items: start;
    margin-top: 0px;
  }
  @media (min-width: 1440px) {
    width: 350px;
  }
`;

export const PlanetName = styled.h2`
  font-size: 40px;
  @media (min-width: 768px) {
    font-size: 48px;
  }
  @media (min-width: 1440px) {
    font-size: 80px;
  }
`;

export const PlanetText = styled.p`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  @media (min-width: 768px) {
    width: 339px;
    text-align: start;
  }
  @media (min-width: 1440px) {
    width: 350px;
  }
`;
export const PlanetLinkwikipedia = styled.p`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  line-height: 25px;
`;

export const Number1div = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    /* padding-top: 460px;
  margin-bottom: 36px; */
    padding-top: 480px;
  }

  @media (min-width: 1440px) {
    flex-direction: column-reverse;
    /* width: 350px; */
    padding-top: 126px;
    padding-left: 953px;
  }
`;
