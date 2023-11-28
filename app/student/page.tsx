import React from 'react'
import StudentNavigation from '../components/nav/StudentNavigation'
import StudentAdvisor from '../components/StudentAdvisor'
import DefaultNavigation from '../components/nav/DefaultNavigation'
import InstructorNavigation from '../components/nav/InstructorNavigation'
import AdminNavigation from '../components/nav/AdminNavigation'
import wait from '@/learn360ai/utils'


async function StudentDashboard() {

    await wait(500)

    return (
        <>
            <DefaultNavigation />
            <StudentNavigation />
            <InstructorNavigation />
            <AdminNavigation />
            <StudentAdvisor />
        </>
    )
}

export default StudentDashboard