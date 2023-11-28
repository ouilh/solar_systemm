"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import { LoginButton, RegisterButton } from "@/app/components/commons/buttons.components"
import styles from "@/app/styles/signin.module.css"


export default function SignInPage() {

    const { data: session } = useSession()

    if (session && session.user) {
        return (
            redirect('/auth/profile')
        )
    }

    return (
        <div className={styles.container}>
            <h1 className="title">Sign In Page</h1>
            <div className={styles.content}>
                <h2> You are not signed in!!</h2>
            </div>
            <div>
                <LoginButton />
                <RegisterButton />
            </div>
        </div>
    )
}