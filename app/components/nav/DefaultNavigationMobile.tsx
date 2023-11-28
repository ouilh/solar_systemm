import React, { MouseEvent, useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, IconButton, Popover, Box, Theme, useTheme, ListItemIcon, ListItemText, ListItem, List } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search'; // Explore
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Learn
import VisibilityIcon from '@mui/icons-material/Visibility'; // Vision
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'; // Guides
import PeopleIcon from '@mui/icons-material/People'; // Connect
import PersonIcon from '@mui/icons-material/Person'; // Join/Sign In

const useStyles = makeStyles((theme: Theme) => ({
    menuIcon: {
        color: 'white',
    },
    listItem: {
        padding: '15px 25px',
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        border: '0 0 5px 0 solid red',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

function DefaultNavigationMobile() {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const classes = useStyles();

    const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'mobile-menu' : undefined;

    return (
        <AppBar position="static" style={{ backgroundColor: theme.palette.primary.dark, width: '100%' }}>
            <Toolbar>
                <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                    <span role="img" aria-label="Education Emoji" style={{ marginRight: '8px' }}>
                        🎓
                    </span>
                    Learn360AI(Guest)
                </Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-controls={id}
                    aria-haspopup="true"
                    onClick={handleOpenMenu}
                    style={{ color: theme.palette.secondary.main }}
                >
                    <MenuIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    style={{
                        marginTop: '50px',
                        width: '100%',
                        backgroundColor: theme.palette.primary.dark,
                    }}
                >
                    <Box sx={{ width: 'calc(100vw - 16px)', backgroundColor: theme.palette.primary.dark }}>
                        <List>
                            <ListItem
                                component={Link}
                                href="/"
                                disableGutters
                                onClick={handleCloseMenu}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    <SearchIcon className={classes.menuIcon} />
                                </ListItemIcon>
                                <ListItemText primary="Explore" />
                            </ListItem>
                            <ListItem
                                component={Link}
                                href="/courses"
                                disableGutters
                                onClick={handleCloseMenu}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    <MenuBookIcon className={classes.menuIcon} />
                                </ListItemIcon>
                                <ListItemText primary="Learn" />
                            </ListItem>
                            <ListItem
                                component={Link}
                                href="/assignments"
                                disableGutters
                                onClick={handleCloseMenu}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    <VisibilityIcon className={classes.menuIcon} />
                                </ListItemIcon>
                                <ListItemText primary="Vision" />
                            </ListItem>
                            <ListItem
                                component={Link}
                                href="/grades"
                                disableGutters
                                onClick={handleCloseMenu}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    <LocalLibraryIcon className={classes.menuIcon} />
                                </ListItemIcon>
                                <ListItemText primary="Guides" />
                            </ListItem>
                            <ListItem
                                component={Link}
                                href="/calendar"
                                disableGutters
                                onClick={handleCloseMenu}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    <PeopleIcon className={classes.menuIcon} />
                                </ListItemIcon>
                                <ListItemText primary="Connect" />
                            </ListItem>
                            <ListItem
                                component={Link}
                                href="/resources"
                                disableGutters
                                onClick={handleCloseMenu}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    <PersonIcon className={classes.menuIcon} />
                                </ListItemIcon>
                                <ListItemText primary="Join" />
                            </ListItem>
                        </List>
                    </Box>
                </Popover>
            </Toolbar>
        </AppBar>
    );
}

export default DefaultNavigationMobile;
