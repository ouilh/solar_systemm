'use client'

import {
    Theme,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    Avatar,
    Chip,
    Badge,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material';
import { ThumbUp, ChatBubble, Group, QuestionAnswer } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import StudentNavigation from '@/app/components/nav/StudentNavigation';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'block',
        padding: theme.spacing(4),
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
    },
    card: {
        margin: theme.spacing(2),
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: '0.3s',
        '&:hover': {
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            transform: 'translateY(-4px)',
        },
        width: '50%',
    },
    avatar: {
        width: 64,
        height: 64,
        backgroundColor: '#6100f0',
        margin: theme.spacing(1),
    },
    badge: {
        margin: theme.spacing(2),
        backgroundColor: '#6100f0',
    },
    cardImage: {
        width: '100%',
        height: 180,
        objectFit: 'cover',
        borderRadius: '5px 5px 0 0',
    },
}));

const CommunityPage = () => {
    const classes = useStyles();

    return (

        <>
            <StudentNavigation />

            <div className={classes.root}>
                <Typography variant="h2" component="h2" gutterBottom>Community Central</Typography>

                <Grid container spacing={4}>
                    {/* Featured Discussion Rooms */}
                    {[1, 2].map(item => (
                        <Grid item xs={6} key={item}>
                            <Card className={classes.card}>
                                <img className={classes.cardImage} src="https://plchldr.co/i/320x180?bg=6100f0" alt="Discussion Room" />
                                <CardContent>
                                    <Typography variant="h5">Featured Room {item}</Typography>
                                    <Typography variant="body1">Join the discussion about the latest in EdTech!</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" color="primary" size="small">Join Now</Button>
                                    <Badge badgeContent={99} color="error" className={classes.badge}>
                                        <ChatBubble />
                                    </Badge>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                    {/* Trending Topics */}
                    <Grid item xs={12}>
                        <Typography variant="h4">Trending Topics</Typography>
                        <List>
                            {["AI in Education", "Remote Learning Tools", "EdTech 2023 Trends"].map(topic => (
                                <ListItem button key={topic}>
                                    <ListItemIcon><ThumbUp /></ListItemIcon>
                                    <ListItemText primary={topic} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* User Testimonials */}
                    <Grid item xs={12}>
                        <Typography variant="h4">What Our Members Say</Typography>
                        <Divider />
                        <Grid container spacing={2}>
                            {[1, 2, 3].map(num => (
                                <Grid item xs={4} key={num}>
                                    <blockquote>
                                        <Typography variant="body1">"The community here has transformed my learning journey!"</Typography>
                                        <Chip
                                            avatar={<Avatar src="https://plchldr.co/i/64x64?bg=6100f0" />}
                                            label={`User ${num}`}
                                            variant="outlined"
                                            color="primary"
                                            clickable
                                        />
                                    </blockquote>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Community Stats & Network Building */}
                    <Grid item xs={6}>
                        <Typography variant="h4">Community Stats</Typography>
                        <Divider />
                        <List>
                            {[
                                { icon: <Group />, text: '5,000 Active Members' },
                                { icon: <ChatBubble />, text: '10,000 New Posts This Week' },
                                { icon: <ThumbUp />, text: '1 Million Likes' }
                            ].map(stat => (
                                <ListItem key={stat.text}>
                                    <ListItemIcon>{stat.icon}</ListItemIcon>
                                    <ListItemText primary={stat.text} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4">Build Your Network</Typography>
                        <Divider />
                        <Typography variant="body1" gutterBottom>
                            Connect with peers, mentors, and educators. Dive deep into discussions and build your learning network.
                        </Typography>
                        <Button variant="contained" color="primary" size="large">Connect Now</Button>
                    </Grid>

                    {/* Interactive Polls */}
                    <Grid item xs={12}>
                        <Typography variant="h4">Quick Poll</Typography>
                        <Divider />
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5">Which area of EdTech interests you the most?</Typography>
                                {["AI in Education", "Virtual Classrooms", "IoT for Learning", "Gamified Learning Modules"].map(option => (
                                    <Button variant="outlined" color="primary" style={{ margin: '8px 0' }} key={option}>
                                        {option}
                                    </Button>
                                ))}
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary">Vote</Button>
                                <Button variant="text">View Results</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* Call to action for creating new posts */}
                    <Grid item xs={12}>
                        <Typography variant="h4">Share Your Insights!</Typography>
                        <Typography variant="body1" gutterBottom>
                            Got a unique perspective or a burning question? Start a discussion and share your thoughts with our thriving community!
                        </Typography>
                        <Button variant="contained" color="secondary" size="large">Join the Conversation!</Button>
                    </Grid>

                    {/* Footer */}
                    <Grid item xs={12}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            © 2023 EdTech Innovations. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default CommunityPage;
