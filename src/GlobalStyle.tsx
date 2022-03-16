import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* reset */
  *{padding:0;margin:0;font:inherit;color:inherit;}
  *,::after, ::before {box-sizing:border-box;flex-shrink:0;}
  :root {line-height:1.5;overflow-wrap:break-word;tab-size:4;tab-size:4;cursor:default;-webkit-tap-highlight-color:transparent;text-size-adjust:100%;text-size-adjust:100%}
  html, body {width: 100%; height:100%; font-size: 62.5%;}
  img, picture, video, canvas, svg {display: block;max-width:100%;}
  button {cursor:pointer;background:none;border:0;}
  a {text-decoration:none}
  table {border-spacing:0;border-collapse:collapse}

  * { font-family: 'Spoqa Han Sans Neo', sans-serif; }
`;

export default GlobalStyle;
