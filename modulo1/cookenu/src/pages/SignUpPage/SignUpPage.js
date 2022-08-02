import React from "react";
import { ScreenContainer } from "./styled"
import SignUpForm from "./SignUpForm"
import { LogoImage } from "./styled"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    return (
        <ScreenContainer>
            <h1>SignUpPage</h1>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}

export default SignUpPage