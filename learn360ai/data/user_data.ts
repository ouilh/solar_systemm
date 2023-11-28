import type { User } from '@prisma/client';
import { DataProvider } from '@/prisma/prisma_client';
import bcryptjs from 'bcryptjs'
import exp from 'constants';
import { use } from 'react';


export async function getAuthentificatedUser(credentials: { email: string, password: string }) {

    const user: User | null = await getUserByEmail(credentials.email);
    console.log('>>>> getAuthentificatedUser')
    console.log(user)

    if (user && bcryptjs.compareSync(credentials.password, user.password))
        return Promise.resolve(user);
    else
        return Promise.resolve(null);
}


export async function getAllUsers(): Promise<User[]> {

    // Todo : omit passwords and sensitive data

    const users: User[] = await DataProvider().user.findMany();
    //await DataProvider().$disconnect()

    return users;
}


export async function getUserById(userId: string): Promise<User | null> {

    // todo : omit password

    const user = await DataProvider().user.findUnique({
        where: {
            id: userId,
        },
    });

    //await DataProvider().$disconnect()

    return user;
}


export async function getUserByEmail(email: string): Promise<User | null> {
    const user = await DataProvider().user.findUnique({
        where: {
            email: email,
        },
    });

    //await DataProvider().$disconnect()

    return user;
}


export async function createUser(user: User): Promise<User> {

    const salt = bcryptjs.genSaltSync();
    const password_hashed = bcryptjs.hashSync(user.password, salt);
    user.password = password_hashed;

    const created_user = await DataProvider().user.create({ data: user });
    //await DataProvider().$disconnect()

    return created_user;
}


export async function updateUser(user: User) {

    // TODO how to handle password safety and update ??

    const created_user = await DataProvider().user.update({
        data: user,
        where: {
            id: user.id,
        }
    });

    //await DataProvider().$disconnect()

    return created_user;
}


export async function deleteUserById(userId: string) {
    const deleted_user = await DataProvider().user.delete({
        where: {
            id: userId,
        }
    });

    //await DataProvider().$disconnect()

    return deleted_user;
}