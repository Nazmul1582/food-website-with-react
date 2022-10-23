import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800;900&display=swap');
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
    font-family: 'Montserrat', sans-serif;
    }

    #Root {
    min-height: 100vh;
    }

    a{
        text-decoration: none;
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
