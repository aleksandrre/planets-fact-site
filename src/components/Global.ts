import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{}>`
   
   body{
    /* overflow-y: hidden; */
    /* overflow-x: hidden; */
    
    width: 100%;
    height: 100vh;

    background-color:#070724 ;
    
   }
  
   h1{
      font-family: 'Spartan';
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      color: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.5;
   }
   
   
   h2{
      font-family: 'Antonio';
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;
      color: #FFFFFF;
      
   }
   
`;

export default GlobalStyles;
