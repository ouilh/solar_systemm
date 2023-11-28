'use client'
import StudentNavigation from '@/app/components/nav/StudentNavigation';
import { Theme, Typography, Card, CardContent, CardActions, Button, Grid, Avatar, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4),
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
    },
    title: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        color: '#6100f0',
        fontWeight: '300!important',
        fontSize: '3rem!important',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    cardContent: {
        display: 'flex',
    },
    cardMedia: {
        width: 100,
        height: 100,
        marginRight: theme.spacing(2),
    },
    cardDetails: {
        flex: 1,
    },
    cardDescription: {
        height: '80px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
    },
    participants: {
        marginTop: theme.spacing(2),
    },
    chip: {
        marginRight: theme.spacing(1),
    }
}));

const mockSpaces = [
    {
        id: "0",
        title: "AI Enthusiasts",
        description: "Discuss the latest in AI technology and share project ideas.",
        img: "https://plchldr.co/i/640x480?bg=6100f0",
        participants: ["Alice", "Bob", "Charlie"],
    },
    {
        id: "1",
        title: "Quantum Computing",
        description: "Delve into the depths of quantum mechanics and computing.",
        img: "https://plchldr.co/i/640x480?bg=6100f0",
        participants: ["David", "Eva", "Frank", "Grace"],
    }
];

const CollabPage = () => {
    const classes = useStyles();

    return (
        <>
            <StudentNavigation />
            <div className={classes.root}>
                <Typography variant="h2" component="h2" gutterBottom className={classes.title}>Collaborative Spaces</Typography>

                <Grid container spacing={4}>
                    {mockSpaces.map(space => (
                        <Grid item xs={12} md={6} key={space.id}>
                            <Card className={classes.card}>
                                <div className={classes.cardContent}>
                                    <Avatar
                                        className={classes.cardMedia}
                                        src={space.img}
                                        variant="square"
                                        alt={space.title}
                                    />
                                    <div className={classes.cardDetails}>
                                        <Typography variant="h5" gutterBottom>
                                            {space.title}
                                        </Typography>
                                        <Typography className={classes.cardDescription}>
                                            {space.description}
                                        </Typography>
                                        <div className={classes.participants}>
                                            {space.participants.map((participant, index) => (
                                                <Chip
                                                    key={index}
                                                    label={participant}
                                                    className={classes.chip}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Join Space
                                    </Button>
                                    <Button size="small" color="secondary">
                                        Invite
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
};

export default CollabPage;
