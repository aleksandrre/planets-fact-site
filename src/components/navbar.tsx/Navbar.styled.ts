import styled from "styled-components";

export const NavbarDiv = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 768px) {
    flex-direction: column;
    margin-top: 32px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    padding-top: 22px;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #ffffff;

  font-family: "Antonio";
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;
export const Imghamburgericon = styled.img`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const HamburgerDiv = styled.ul<any>`
  position: absolute;
  margin-top: 468px;
  display: flex;
  flex-direction: column;
  min-width: 327px;
  /* height: 667px; */
  background-color: #070724;
  z-index: 2;
  margin-left: ${({ state }) => (state ? "0" : "-100%")};
  transition: 0.5s;
  border: 1px solid #070724;

  @media (min-width: 768px) {
    position: relative;
    flex-direction: row;
    display: flex;
    margin-left: 0;
    height: 100%;
    top: 0;
    justify-content: center;
    gap: 33px;
    margin-top: 39px;
    margin-bottom: 27px;
    transition: 0s;
  }
  @media (min-width: 1440px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 45px;
  height: 25px;
  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
  color: #ffffff;

  @media (min-width: 768px) {
    /* width: auto; */
    margin-top: 0px;
    font-size: 11px;
  }
`;

export const DivForChevron = styled.div`
  display: flex;
  align-items: center;
`;
export const Smalldiv = styled.div<any>`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: ${({ element }) => element.background};
  margin-right: 25px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Chevronimg = styled.img`
  margin-left: 10%;
  width: 4px;
  height: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`;
