
"use client"
import styled from "styled-components";
import { signIn } from "next-auth/react"


const StyledContainer = styled.div`
    margin: 5vh auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(10px + 2vh);
    color: #171717;
    font-weight: bold;
`


const StyledButton = styled.button`

    width: calc(var(--spacing) * 96);
    border-radius: var(--radius-xl);
    padding: calc(var(--spacing) * 4);
    background-color:  var(--color-blue-300);;
    &:hover {
        transform: translateY(-3px);
    }
`



export default function SignIn() {
    return <StyledContainer>
        <StyledButton
                onClick={() => signIn("google", { redirectTo: "/dashboard" })}>
            Sign in with Google
        </StyledButton>

    </StyledContainer>




}
