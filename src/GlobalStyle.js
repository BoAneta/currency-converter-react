import { createGlobalStyle } from "styled-components";
import background from "./money.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    #root {
        font-family: 'Montserrat', sans-serif;
        display: flex;
    }

    body {
        background-image: url("${background}");
        background-size: cover;
        background-repeat:inherit;
    }

    button {
        cursor: pointer;
    }
`;