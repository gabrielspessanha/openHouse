import { styled } from "styled-components";


export const Content = styled.div`

    table{
        width: 100%;
        border-spacing: 0 .5rem;
        border-collapse: separate;

        th{
            color: #FFF;
            font-weight: 600;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 2rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: #FFF;
            color:  #969CB3;
           

            &:first-child{
                color:#363F5F;
            }
        }
        
    }

@media (max-width: 516px){

    table{
        width: 100%;

        th{
            padding: 1rem .1rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: .5rem .2rem;
            font-size: .7rem;
        }
    }
}
`