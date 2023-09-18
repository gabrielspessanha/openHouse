import { styled } from "styled-components";




export const Content = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;


    h2{
        margin-bottom: 1.5rem;
        text-align: center;
    }

    input{
        margin-bottom: 1rem;
        padding: 0 1.5rem;
        height: 2rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
        border:1px solid var(--primary-color);
    }
    
    button{
        padding: 1rem 2rem;
        background: var(--primary-color);
        border: none;
        border-radius: 5px;
        font-weight: 600;
        color: var(--background);
        transition: filter .2s;

        &:hover{
            filter: brightness(.9);
        }
    }


`