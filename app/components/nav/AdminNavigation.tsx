"use client"

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Folder } from '@mui/icons-material';

// Admin Icons
import InsightsIcon from '@mui/icons-material/Insights'; // Insights
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet'; // Pathways
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // Guides
import PeopleIcon from '@mui/icons-material/People'; // Learners
import StorageIcon from '@mui/icons-material/Storage'; // Resources
import PersonIcon from '@mui/icons-material/Person'; // Profile


const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        backgroundColor: '#383838 !important',
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


function AdminNavigation() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" component="div" className={classes.title}>
                    <span role="img" aria-label="Education Emoji" className={classes.emojiIcon}>
                        🎓
                    </span>
                    Learn360AI(Admin)
                </Typography>
                <Button component={Link} href="/" color="inherit" className={classes.navButton} startIcon={<InsightsIcon />}>
                    Insights
                </Button>
                <Button component={Link} href="/courses" color="inherit" className={classes.navButton} startIcon={<SettingsEthernetIcon />}>
                    Pathways
                </Button>
                <Button component={Link} href="/assignments" color="inherit" className={classes.navButton} startIcon={<EmojiObjectsIcon />}>
                    Guides
                </Button>
                <Button component={Link} href="/grades" color="inherit" className={classes.navButton} startIcon={<PeopleIcon />}>
                    Learners
                </Button>
                <Button component={Link} href="/calendar" color="inherit" className={classes.navButton} startIcon={<StorageIcon />}>
                    Resources
                </Button>
                <Button component={Link} href="/resources" color="inherit" className={classes.navButton} startIcon={<Folder />}>
                    Live Class
                </Button>
                <Button component={Link} href="/profile" color="inherit" className={classes.navButton} startIcon={<PersonIcon />}>
                    Profile
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default AdminNavigation;
