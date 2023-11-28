import { NextRequest, NextResponse } from 'next/server';
import { createUser, deleteUserById, getAllUsers, getUserByEmail } from '@/learn360ai/data/user_data';
import { User, UserRole } from '@prisma/client';
import { ApiError } from 'next/dist/server/api-utils';
import { STATUS_CODES } from 'http';


export async function GET() {
    console.log(`>>>>>>> GET users`)
    let users: User[] = await getAllUsers();
    if (users.length === 0) {
        users = [];
    }
    return NextResponse.json(users);
}


export async function POST(request: NextRequest, response: NextResponse) {
    console.log(`>>>>>>>>> Post user`);

    const user_data = await request.json();

    console.log(user_data);

    const email = user_data.email;
    if (!email) {
        console.log('User data is missing email address');
        throw new ApiError(422, 'Email address is required');
    }

    const existing_user = await getUserByEmail(email);
    if (existing_user) {
        console.log(`User with email ${email} already exists`);
        throw new ApiError(409, 'User already exists');
    }

    try {
        const new_user = await createUser(user_data);
        console.log(new_user);

        return NextResponse.json({ new_user });
    }
    catch (error) {
        throw new ApiError(500, 'Cannot create user');
    }
    finally {

    }
}




// export async function POST(request: NextRequest) {

//     console.log(`>>>>>>>>> Post user`)

//     const user_data = await request.json();

//     console.log(user_data);

//     await getUserByEmail(.......)

//     const new_user: User = await createUser(user_data);

//     console.log(new_user);

//     return NextResponse.json({ new_user })
// }


type UserProps = {
    userId: number,
}


export async function DELETE(request: NextRequest) {

    console.log(`>>>>>>>>>> Deleting user...`);
    const { searchParams } = new URL(request.url);
    const userId: string | null = searchParams.get('userId');

    try {
        if (!userId)
            return NextResponse.json(`Cannot delete user. Bad ID:${userId}`, { status: 404 });

        console.log(`>>>>>>>>> Deleting user : ${userId}`)
        const deleted_user: User = await deleteUserById(userId);
        return NextResponse.json(deleted_user);
    }
    catch (error) {
        return NextResponse.json(`An error has occured while deleting ID:${userId}. Error:${error}`,
            { status: 404 });
    }
}
