import { styled } from "styled-components";

import bgCard from '../../imgs/bg-card.png'

 const Container = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;


    .card{
        background-color: rgba(0, 0, 0, 1.0);
        background: #e7e9ee;
        width: 330px;
        padding: 2rem;
        display: flex;
        flex-direction:column;
        justify-content: space-between;

        cursor: pointer;
        transition: transform .3s;
        background: url(${bgCard}) no-repeat center center;
        background-size:cover;
        color: #FFF;


        h3{
            font-weight: 600;
        }

        &:hover{
            transform: scale(1.06);
            box-shadow: 2px 2px 5px black
        }
    }

`
export default Container