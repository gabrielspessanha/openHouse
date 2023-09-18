import { createGlobalStyle } from "styled-components";

import background from '../imgs/background.jpg';

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

    .background-main{
        background: url(${background}) no-repeat center center;
        background-size:cover;
        height: 100vh;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
    .react-table-close{
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }


`