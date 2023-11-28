"use client"
import { NextResponse } from 'next/server';
import type { User } from '@prisma/client';
import { Button, Grid, List, ListItem, ListItemText, Stack } from "@mui/material";

const headers: HeadersInit = {
  'Content-Type': 'application/json',
  'API-Key': process.env.DATA_API_KEY || '',
};

export default async function UserListPage() {

  let users: User[];

  const res = await fetch('http://localhost:3000/api/users/', { headers, cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Failed to retrieve users")
  }

  users = await res.json();

  return (
    <>
      <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
        <h1>List of Users</h1>
        {
          users.length === 0 ?
            <div>No Users Found</div>
            :
            <List>
              {users.map((user) => (
                <ListItem key={user.id}>
                  <ListItemText primary={user.username} secondary={user.email} />
                </ListItem>
              ))}
            </List>
        }
      </Grid>
    </>
  );
}