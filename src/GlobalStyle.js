import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    html,
    body {
    height: 100%;
    }

    html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    }

    body {
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: sans-serif;
    }

    #Root {
    min-height: 100vh;
    }

    table {
    border-collapse: collapse;
    border-spacing: 0;
    }

    button,
    input[type="submit"],
    input[type="reset"],
    input[type="button"] {
    cursor: pointer;
    }

    input,
    button,
    textarea,
    select {
    font: inherit;
    color: inherit;
    }

    img,
    picture,
    video,
    canvas,
    svg {
    display: block;
    max-width: 100%;
    }

    [hidden] {
    display: none;
    }

`;

export default GlobalStyle;
