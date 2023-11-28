import { SendVerificationRequestParams } from 'next-auth/providers/email';
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions, Profile } from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { DataProvider } from '@/prisma/prisma_client';
import { sendEmail } from '../email/email';
import { getAuthentificatedUser } from '../data/user_data';
import { Account, User } from '@prisma/client';
import { JWT } from 'next-auth/jwt';


// to do assign custom email to sendVerificationRequest: in email provider
async function verificationRequest(params: SendVerificationRequestParams): Promise<void> {

    const { identifier, url, provider } = params;

    const subject = 'Verify your email address';
    const text = `Please click the following link to verify your email: ${url}`;

    await sendEmail(identifier, subject, text);
}


export const authOptions: NextAuthOptions = {

    session: {
        strategy: "jwt",
    },

    adapter: PrismaAdapter(DataProvider()),

    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : '',
        //     clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : ''
        // }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID ? process.env.FACEBOOK_ID : '',
            clientSecret: process.env.FACEBOOK_SECRET ? process.env.FACEBOOK_SECRET : ''
        }),
        // Email({
        //     server: {
        //         host: process.env.EMAIL_SERVER,
        //         port: process.env.EMAIL_PORT ? +process.env.EMAIL_PORT : 587,
        //         auth: {
        //             user: process.env.EMAIL_USER,
        //             pass: process.env.EMAIL_PASSWORD
        //         }
        //     },
        //     from: process.env.EMAIL_FROM,
        // }),
        CredentialsProvider({
            name: "Sign-in with credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "ada.lovelace@domain.tld" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {

                console.log(">>>>>>>> authorize credentials")
                console.log(credentials)

                if (!credentials || !credentials.email || !credentials.password)
                    return null;

                const user: User | null = await getAuthentificatedUser(credentials);

                console.log(">>>>>>>> getAuthentificatedUser")
                console.log(user)

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
    ],

    callbacks: {
        async session({ session, token, user }) {
            session.user.role = token.role; // Add role to the session user object

            // console.log(">>>>>>>> session callback >>>>>>>>")
            // console.log(session)

            return session;
        },
        async jwt({ token, user, account }) {
            if (user) {
                token.role = (user as User).role; // Add role to the token payload
                token.id = user.id
            }
            if (account) {
                token.accessToken = account.access_token
            }
            return token;
        },
    },

    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "#6100f0", // Hex color code
        logo: "/learn360ai.svg", // Absolute URL to image
        buttonText: "#ffffff" // Hex color code
    },

    pages: {
        //     signIn: '/auth/signin',
        //     signOut: '/auth/signout',
        //     error: '/auth/error',
        newUser: '/auth/register',
        //     verifyRequest: '/auth/verify',
    },

    events: {
        async signIn(message) { console.log("/* on successful sign in */") },
        async signOut(message) { console.log("/* on signout */ ") },
        async createUser(message) { console.log("/* user created */ ") },
        async updateUser(message) { console.log("/* user updated - e.g. their email was verified */ ") },
        async linkAccount(message) { console.log("/* account (e.g. Twitter) linked to a user */ ") },
        async session(message) { console.log("/* session is active */ ") },
    }
}
