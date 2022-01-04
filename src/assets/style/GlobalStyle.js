import { createGlobalStyle } from 'styled-components'

const headerGap = "75px";

const GlobalStyle = createGlobalStyle`

    .headerGap {
        padding-top: ${headerGap};
    }
    html {
        scroll-behavior: smooth;
    }

    /* 
        Sets the footer at the bottom page or
        at the bottom of viewport if page height
        doesn't pass viewport height
    */
    html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    #root {
        display: table;
        width: 100%;
    }
    #footer {
        display: table-row;
        width: 100%;
        height: 100px;
        z-index: 10;
    }
    /* -------------------------------------- */

`

export default GlobalStyle;