import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/learn360ai/auth/auth'

const ProfilePage = async () => {

    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/auth/signin')
    }

    return (
        <section className='py-24'>
            <div className='container'>
                <h1 className='text-2xl font-bold'>Profile</h1>
            </div>
        </section>
    )
}

export default ProfilePage