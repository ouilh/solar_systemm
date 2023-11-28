"use client"

import Link from 'next/link';
import { LoginButton, LogoutButton } from '../commons/buttons.components';
import DefaultNavigation from './DefaultNavigation';
import StudentNavigation from './StudentNavigation';
import InstructorNavigation from './InstructorNavigation';
import { UserRole } from '@prisma/client';
import { Session } from 'next-auth';


export default function Header({ data: session, status }: { data: Session | null; status: "authenticated" | "loading" | "unauthenticated" }) {

    // console.log("Header session & status >>>>>")
    // console.log(session);
    // console.log(status);

    if (!session) {
        return (
            <div className='header'>
                <DefaultNavigation />
                <Link href='/' className='logo'>
                    Default Header
                </Link>
                <LoginButton />
            </div>
        );
    }

    if (session.user?.role === UserRole.STUDENT) {
        return (
            <div className='header'>
                <StudentNavigation />
                <Link href='/' className='logo'>
                    Student Header
                </Link>
                <LogoutButton />
                {session.user.email}
            </div>
        );
    }

    if (session.user?.role === UserRole.INSTRUCTOR) {
        return (
            <div className='header'>
                <InstructorNavigation />
                <Link href='/' className='logo'>
                    Instructor Header
                </Link>
                <LogoutButton />
                {session.user.email}
            </div>
        );
    }

    // If the user role is not STUDENT or INSTRUCTOR
    // or if session.user is undefined, show a fallback
    return (
        <div className='header'>
            <DefaultNavigation />
            <Link href='/' className='logo'>
                Unexpected Roles Header Fallback
            </Link>
            <LogoutButton />
            {/* {session.user.email} */}
        </div>
    );
}
