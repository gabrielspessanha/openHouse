import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #ffffff;
        --background-secondary: #f1f0ed;
        --primary-color: #f6d588;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }


`