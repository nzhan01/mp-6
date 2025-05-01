import UserInfo from "@/components/UserInfo";

import { auth } from "@/auth";


export default async function Directory(){
    const session = await auth();


    return (
        <>
        <UserInfo session={session} />

        </>
    )
}