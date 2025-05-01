"use client"
import type { Session } from "next-auth"
import styled from "styled-components"


const StyledContainer = styled.div`

    margin: 5vh auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f2f5;
    width: 30%;

    border-radius: 8%;
    
`

const StyledCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    align-items: center;

`

const StyledImage = styled.img`
width: 50%;
    height: auto;
    border-radius: 50%;
    margin: 1rem;
`

const StyledName =styled.h1`
    font-size: calc(10px + 2vw);
    font-weight: bold;
    

`

const StyledTextArea = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: #0a0a0a;
`


export default function UserInfo({ session }: { session: Session | null }) {
    return (
        <StyledContainer>
            <StyledCard>
                <StyledTextArea>
                    <StyledName>  {session?.user?.name}</StyledName>
                    <h3><strong>Email:</strong> {session?.user?.email}</h3>
                </StyledTextArea>

                <StyledImage
                    src={session?.user?.image ?? "https://i.pravatar.cc/300"}
                    alt="User Avatar"
                />
            </StyledCard>

        </StyledContainer>
    )
}