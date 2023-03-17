import styled from "styled-components";

export const InormationDiv = styled.div`
  width: 100%;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 36px;
  }
  @media (min-width: 1440px) {
    justify-content: space-around;
    padding-bottom: 56px;
    margin-top: 187px;
  }
`;

export const InformationChildren = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: end;
    width: 164px;
    height: 88px;
    border: 1px solid #ffffff;
  }
  @media (min-width: 1440px) {
    width: 255px;
    height: 128px;
  }
`;

export const InformationChildrennn = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InformationH1 = styled.h1`
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 0.727273px;

  @media (min-width: 1440px) {
    font-size: 11px;
    line-height: 25px;
  }
`;

export const InformationH2 = styled.h2`
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.75px;
  @media (min-width: 768px) {
    line-height: 31px;
    margin-top: 6px;
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    line-height: 52px;
    font-size: 40px;
    margin-top: 6px;
  }
`;
