import { styled } from "styled-components";



export const Container = styled.main`
    display: flex;
    place-content: center;
    align-items: center;
    height: 60vh;

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        p{
            color: #FFF;
            font-weight: 600;
            border-bottom: 2px solid #FFF;
        }

        h1{
            color: #FFF;
            font-size: 4rem;
            font-weight: 600;
        }
        
        small{
            font-size: .6rem;
            color: #FFF;
        }

        button{
            background: var(--primary-color);
            border: 0;
            margin-top: 1rem;
            padding: .75rem 2rem;
            transition: .3s;
            font-weight: 600;

            &:hover{
                filter: brightness(.9);
                transform: scale(1.1);
            }
        }


    }

`