"use client"
import { Button, TextField, Typography } from '@mui/material';

export default function CreateUserPage() {

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {

            const response = await fetch("/api/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email
                })
            });

            console.log('New user:', response.body);

            Response.redirect('/users/')

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Create User
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="email"
                    label="Email"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Create User
                </Button>
            </form>
        </div>
    );
}
