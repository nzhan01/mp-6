
"use client"
//import styled from "styled-components";
import { signIn } from "next-auth/react"

{/*
const StyledButton = styled.button`


`
*/}


export default function SignIn() {
    return <div>
        <button className = "w-96 rounded-xl p-4 bg-blue-300"
                onClick={() => signIn("google", { redirectTo: "/dashboard" })}>
            Sign in with Google
        </button>

    </div>




}
