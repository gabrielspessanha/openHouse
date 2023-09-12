import styled from "styled-components";



export const Container = styled.form`
    background: var(--background-secondary);
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: 2rem;
    border-radius: 20px;
    margin: 5rem auto;

    h2{
        margin-bottom: 1.5rem;
        text-align: center;
    }
    input{
        margin-bottom: 1rem;
        line-height: 1.2rem;
        height: 2rem;
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