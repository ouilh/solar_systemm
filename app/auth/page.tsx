"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import styles from '../styles/Login.module.css'
import {
    LoginButton,
    LogoutButton,
    ProfileButton,
    RegisterButton,
} from "../components/commons/buttons.components";

export default function SignInPage() {
    const { data: session } = useSession()

    if (session && session.user) {
        return (
            <div className={styles.container}>
                <h1 className="title">Login Page</h1>
                <div className={styles.content}>
                    <h2> Signed in as {session.user.email} <br /></h2>
                    <div className={styles.btns}>
                        <LogoutButton />
                        <ProfileButton />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.container}>
                <h1 className="title">Login Page</h1>
                <div className={styles.content}>
                    <h2> You are not signed in!!</h2>
                    <LoginButton />
                    <RegisterButton />
                </div>
            </div>
        )
    }
}