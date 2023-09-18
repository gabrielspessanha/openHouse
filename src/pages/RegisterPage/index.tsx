import { Header } from "../../components/Header";
import { RegisterUser } from "../../components/RegisterUser";
import { RegisterContainer } from "./styles";





export function RegisterPage(){
    return(
        <RegisterContainer>
            <RegisterUser />
        </RegisterContainer>

    )
}