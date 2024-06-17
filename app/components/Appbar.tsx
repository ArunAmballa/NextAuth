"use client";
import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = () => {
    const session=useSession();

    return <div>

    <h1>Client Component</h1>
    <button onClick={() => signIn()}>Signin</button>
    <br />
    <button onClick={() => signOut()}>Sign out</button>

    {JSON.stringify(session)}
  </div>
}