"use client"

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { EmojiPeople, Home, MenuBook, Assignment, BarChart, EventNote, Folder, Person } from '@mui/icons-material';

// Instructor Icons
import ClassIcon from '@mui/icons-material/Class'; // Classes
import CreateIcon from '@mui/icons-material/Create'; // Pathways
import LiveTvIcon from '@mui/icons-material/LiveTv'; // Live Classroom
import BarChartIcon from '@mui/icons-material/BarChart'; // Progress
import FeedbackIcon from '@mui/icons-material/Feedback'; // Feedback
import EmojiNatureIcon from '@mui/icons-material/EmojiNature'; // Experiences
import GroupWorkIcon from '@mui/icons-material/GroupWork'; // Collab Space
import PersonIcon from '@mui/icons-material/Person'; // Profile


const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        backgroundColor: '#39a9db !important',
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


function InstructorNavigation() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" component="div" className={classes.title}>
                    <span role="img" aria-label="Education Emoji" className={classes.emojiIcon}>
                        🎓
                    </span>
                    Learn360AI(Guide)
                </Typography>
                <Button component={Link} href="/" color="inherit" className={classes.navButton} startIcon={<Home />}>
                    Classes
                </Button>
                <Button component={Link} href="/courses" color="inherit" className={classes.navButton} startIcon={<MenuBook />}>
                    Pathways
                </Button>
                <Button component={Link} href="/assignments" color="inherit" className={classes.navButton} startIcon={<Assignment />}>
                    Progress
                </Button>
                <Button component={Link} href="/grades" color="inherit" className={classes.navButton} startIcon={<BarChart />}>
                    Feedback
                </Button>
                <Button component={Link} href="/calendar" color="inherit" className={classes.navButton} startIcon={<EventNote />}>
                    Experiences
                </Button>
                <Button component={Link} href="/resources" color="inherit" className={classes.navButton} startIcon={<Folder />}>
                    Collab Space
                </Button>
                <Button component={Link} href="/profile" color="inherit" className={classes.navButton} startIcon={<PersonIcon />}>
                    Profile
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default InstructorNavigation;
