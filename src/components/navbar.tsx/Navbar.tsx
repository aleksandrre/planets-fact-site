import React from "react";
import { Link } from "react-router-dom";
import {
  Chevronimg,
  DivForChevron,
  HamburgerDiv,
  Imghamburgericon,
  Li,
  NavbarDiv,
  Smalldiv,
  Title,
} from "./Navbar.styled";
import hamburgerIcon from "../../assets/icon-hamburger.svg";
import Chevron from "../../assets/icon-chevron.svg";

const Navbar = ({ state, setState, object }) => {
  return (
    <NavbarDiv>
      <Title>THE PLANETS</Title>
      <HamburgerDiv state={state}>
        {object.map((element, index) => (
          <Link to={element.link}>
            <Li key={index}>
              <DivForChevron>
                <Smalldiv element={element} object={object}></Smalldiv>
                {element.title}
              </DivForChevron>
              <Chevronimg src={Chevron} />
            </Li>
          </Link>
        ))}
      </HamburgerDiv>
      <Imghamburgericon src={hamburgerIcon} onClick={() => setState(!state)} />
    </NavbarDiv>
  );
};

export default Navbar;
