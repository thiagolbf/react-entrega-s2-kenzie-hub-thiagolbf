import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --grey50: #868E96;
        --grey4: #121214;
        --grey3: #212529;
        --grey2: #343B41;
        --grey1: #868E96;
        --grey0: #F8F9FA;

        --colorPrimary: #FF577F;
        --colorPrimaryFocus: #FF427F;
        --colorPrimaryNegative: #59323F;

        --white: #FFFFFF;
        
        --red: #B53737;
    }

    body {
        background: var(--grey4);
    }

    button {
        cursor: pointer;

    }

    a {
        text-decoration: none;
        
    }


`;
