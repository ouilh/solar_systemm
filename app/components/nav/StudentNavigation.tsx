"use client"

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { EmojiPeople, Home, MenuBook, Assignment, BarChart, EventNote, Folder, Person } from '@mui/icons-material';


// Student Icons
import TimelineIcon from '@mui/icons-material/Timeline'; // Journey
import SchoolIcon from '@mui/icons-material/School'; // Pathways
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // AI Mentor
import LiveTvIcon from '@mui/icons-material/LiveTv'; // Live Classroom
import LocalActivityIcon from '@mui/icons-material/LocalActivity'; // Experiences
import GroupWorkIcon from '@mui/icons-material/GroupWork'; // Collab Space
import PaletteIcon from '@mui/icons-material/Palette'; // Create Lab
import PublicIcon from '@mui/icons-material/Public'; // Community
import PersonIcon from '@mui/icons-material/Person'; // Profile


const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        backgroundColor: '#6100f0 !important',
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


function StudentNavigation() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" component="div" className={classes.title}>
                    <span role="img" aria-label="Education Emoji" className={classes.emojiIcon}>
                        🎓
                    </span>
                    Learn360AI(Student)
                </Typography>
                <Button component={Link} href="/student/journey" color="inherit" className={classes.navButton} startIcon={<TimelineIcon />}>
                    Journey
                </Button>
                <Button component={Link} href="/student/pathways" color="inherit" className={classes.navButton} startIcon={<SchoolIcon />}>
                    Pathways
                </Button>
                <Button component={Link} href="/student/advisor" color="inherit" className={classes.navButton} startIcon={<EmojiObjectsIcon />}>
                    AI Mentor
                </Button>
                <Button component={Link} href="/student/experiences" color="inherit" className={classes.navButton} startIcon={<LocalActivityIcon />}>
                    Experiences
                </Button>
                <Button component={Link} href="/student/simulations" color="inherit" className={classes.navButton} startIcon={<SchoolIcon />}>
                    Simulation
                </Button>
                <Button component={Link} href="/student/courses/1" color="inherit" className={classes.navButton} startIcon={<SchoolIcon />}>
                    Course Test
                </Button>
                <Button component={Link} href="/student/collab" color="inherit" className={classes.navButton} startIcon={<GroupWorkIcon />}>
                    Collab Space
                </Button>
                <Button component={Link} href="/student/community" color="inherit" className={classes.navButton} startIcon={<PublicIcon />}>
                    Community
                </Button>
                <Button component={Link} href="/student/profile" color="inherit" className={classes.navButton} startIcon={<PersonIcon />}>
                    Profile
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default StudentNavigation;
