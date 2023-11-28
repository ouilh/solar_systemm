"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { User, UserRole } from '@prisma/client';
import { redirect } from 'next/navigation';
import bcryptjs from 'bcryptjs'
import { Box, Button, ClassNameMap, MenuItem, Select, SelectChangeEvent, TextField, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PasswordField from '@/app/components/commons/PasswordField';


const useStyles: () => Record<string, any> = makeStyles((theme: Theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        width: '400px',
        spacing: 5,
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
    },
    title: {
        marginBottom: '50px', // Add margin-bottom for space between title and form
    },
}));


export default function RegisterPage() {

    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    /// TODO : Remove if not an admin who will create users manually
    const [role, setRole] = useState<UserRole>(UserRole.GUEST);


    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleUserRoleChange = (event: SelectChangeEvent<HTMLInputElement>) => {
        setRole(event.target.value as UserRole);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        try {

            const user_data = {
                first_name: firstName,
                last_name: lastName,
                username: username,
                password: password,
                email: email,
                role: role,
            };

            console.log(user_data);

            const res = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify(user_data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log(res);

            if (!res.ok) {
                throw new Error('Failed to register user: ' + await res.json()).message;
            }

            redirect('/auth/signin');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box className={classes.box}>
            <Typography variant="h4" component="div" className={classes.title}>
                RegisterPage
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                    id="first-name"
                    label="First Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <TextField
                    id="last-name"
                    label="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <TextField
                    id="username"
                    label="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <PasswordField setPassword={setPassword} />
                <Select
                    label="User Role"
                    value={role as ''}
                    onChange={handleUserRoleChange}
                >
                    {Object.values(UserRole).map(role => (
                        <MenuItem key={role} value={role}>{role}</MenuItem>
                    ))}
                </Select>
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </Box>
    )
}