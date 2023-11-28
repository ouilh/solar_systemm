"use client"

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search'; // Explore
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Learn
import VisibilityIcon from '@mui/icons-material/Visibility'; // Vision
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'; // Guides
import PeopleIcon from '@mui/icons-material/People'; // Connect
import PersonIcon from '@mui/icons-material/Person'; // Join/Sign In


const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        backgroundColor: '#310078 !important',
    },
    title: {
        flexGrow: 1,
    },
    navButton: {
        marginLeft: theme.spacing(1),
    },
    emojiIcon: {
        marginRight: theme.spacing(1),
    },
}));


function DefaultNavigationDesktop() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" component="div" className={classes.title}>
                    <span role="img" aria-label="Education Emoji" className={classes.emojiIcon}>
                        🎓
                    </span>
                    Learn360AI(Guest)
                </Typography>
                <Button component={Link} href="/" color="inherit" className={classes.navButton} startIcon={<SearchIcon />}>
                    Explore
                </Button>
                <Button component={Link} href="/courses" color="inherit" className={classes.navButton} startIcon={<MenuBookIcon />}>
                    Learn
                </Button>
                <Button component={Link} href="/assignments" color="inherit" className={classes.navButton} startIcon={<VisibilityIcon />}>
                    Vision
                </Button>
                <Button component={Link} href="/grades" color="inherit" className={classes.navButton} startIcon={<LocalLibraryIcon />}>
                    Guides
                </Button>
                <Button component={Link} href="/calendar" color="inherit" className={classes.navButton} startIcon={<PeopleIcon />}>
                    Connect
                </Button>
                <Button component={Link} href="/resources" color="inherit" className={classes.navButton} startIcon={<PersonIcon />}>
                    Join
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default DefaultNavigationDesktop;
