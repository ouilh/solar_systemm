"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import styles from "@/app/styles/signin.module.css"
import { LoginButton, LogoutButton, ProfileButton } from "@/app/components/commons/buttons.components"

export default function SignOutPage() {
    const { data: session } = useSession()
    if (session && session.user) {
        return (
            <div className={styles.container}>
                <h1 className="title">Sign Out Page</h1>
                <div className={styles.content}>
                    <h2> Signed in as {session.user.email} <br /></h2>
                    <div className={styles.btns}>
                        <ProfileButton />
                        <LogoutButton />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <h1 className="title">Sign Out Page</h1>
            <div className={styles.content}>
                <h2> You are not signed in!!</h2>
                <LoginButton />
            </div>
        </div>
    )
}