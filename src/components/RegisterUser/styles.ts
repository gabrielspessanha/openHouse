import styled from "styled-components";



 export const Content = styled.form`
    background: #f1f0ed;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: 2rem;
    border-radius: 20px;

    h2{
        margin-bottom: 1.5rem;
        text-align: center;
    }
    input{
        margin-bottom: 1rem;
        line-height: 1.2rem;
        height: 2rem;
        border:#f6d588;
    }
    button{
        padding: 1rem 2rem;
        background: #f6d588;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        color: #FFF;
        transition: filter .2s;

        &:hover{
            filter: brightness(.9);
        }
    }
    @media(max-width: 700px){
        max-width: 250px;
        padding: 1rem;
        border-radius: 20px;

        h2{
            margin-bottom: 1rem;
            text-align: center;
        }
        input{
            margin-bottom: .5rem;
            line-height: 1rem;
            height: 2rem;
            border:#f6d588;
        }
        button{
            padding: .6rem 1.2rem;
            background: #f6d588;
            border: none;
            border-radius: 5px;
            font-weight: 600;
            color: #FFF;
            transition: filter .2s;

            &:hover{
                filter: brightness(.9);
            }
        }
    }

`
export const Container = styled.div`
    display: grid;
    place-content: center;
    height: 70vh;

`
