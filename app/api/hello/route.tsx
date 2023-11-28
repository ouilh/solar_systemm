import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/learn360ai/auth/auth'

export async function GET(): Promise<NextResponse> {

    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({ message: 'You are not logged in.' })
    }
    else {
        if (!session.user) {
            throw Error('Invalid Session. Please contact your administrator.')
        }
        return NextResponse.json({
            message: 'You are authentificated.',
            name: session.user.name,
        });
    }
}