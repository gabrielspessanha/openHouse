import { styled } from "styled-components";


 const Container = styled.div`
    margin-bottom: 2rem;
    .card{
        background: #e7e9ee;
        width: 330px;
        height: 330px;
        padding: 3rem;
        cursor: pointer;
        transition: transform .3s;

        &:hover{
            transform: scale(1.1);
            box-shadow: 2px 2px 5px black
        }
    }

`
export default Container