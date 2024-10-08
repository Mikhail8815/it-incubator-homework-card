import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: rgba(37,54,10,0.83);
    }
`