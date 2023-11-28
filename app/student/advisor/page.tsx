'use client'

import React from 'react'
import StudentNavigation from '@/app/components/nav/StudentNavigation'
import StudentAdvisor from '@/app/components/StudentAdvisor'
import wait from '@/learn360ai/utils'
import { Paper } from '@mui/material'


async function StudentAdvisorPage() {

    await wait(1000)

    return (
        <Paper>
            <StudentNavigation />
            <StudentAdvisor />
        </Paper>
    )
}

export default StudentAdvisorPage