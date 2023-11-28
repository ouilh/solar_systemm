"use client";

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from './theme'
import { SessionProvider } from 'next-auth/react';


const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Learn360AI App',
//   description: '...put description here',
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // console.log(">>>>>>> children >>>>>>>>")
  // console.log(children)
  // console.log(">>>>>>> end_children >>>>>>>>")

  return (

    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>
          <CssBaseline />
          <SessionProvider>
            {children}
          </SessionProvider >
        </body>
      </html >
    </ThemeProvider >

  )
}
