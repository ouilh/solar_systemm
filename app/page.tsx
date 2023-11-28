"use client"

import { useSession } from 'next-auth/react'
import styles from '@/app/styles/home.module.css'
import { Session } from 'next-auth'
import Header from './components/nav/Header'
import useTranslation from '@/learn360ai/lang/useTranslation'
import { ChangeEvent } from 'react'


export default function Home() {

  const { data: session, status }: {
    data: Session | null; status: "authenticated" | "loading" | "unauthenticated"
  } = useSession()

  const componentKeys = ['title', 'description']

  const { currentLanguage, changeLanguage, getTranslation } = useTranslation(componentKeys);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    changeLanguage(language);
  };

  const loading = "loading"

  // console.log("Page session & status >>>>>")
  // console.log(session);
  // console.log(status);

  switch (status) {
    case 'authenticated':
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className={styles.user}>
            <Header data={session} status={status} />
            <h1>Home Page</h1>
            <h1 className={styles.title}>Authentication</h1>
            <p>authenticated</p>
            <p style={{ marginBottom: '10px' }}> Welcome, {session?.user?.name ?? session?.user?.email}</p> <br />
            {/* <img src={session.user.image} alt="" className={styles.avatar} /> */}
          </div>
          <div>
            <select value={currentLanguage} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="ar">Arabic</option>
            </select>
            <h1>{getTranslation('title')}</h1>
            <p>{getTranslation('description')}</p>
          </div>
        </main>
      )

    case 'loading':
      return (
        <p>loading...</p>
      )

    case 'unauthenticated':
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className={styles.user}>
            <Header data={null} status={'unauthenticated'} />
            <h1>Home Page</h1>
            <h1 className={styles.title}>Authentication</h1>
            <p className={styles.title}>You are not connected !</p>
          </div>
          <div>
            {/** TODO Use MUI Select instead of this shitty select ! */}
            <select value={currentLanguage} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="ar">Arabic</option>
            </select>
            <h1>{getTranslation('title')}</h1>
            <p>{getTranslation('description')}</p>
          </div>
        </main>
      )
  }
}
