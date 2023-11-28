'use client'
import StudentNavigation from '@/app/components/nav/StudentNavigation';
import {
    Theme,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Grid,
    LinearProgress,
} from '@mui/material';
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
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    },
    cardMedia: {
        height: 140,
    },
    cardDescription: {
        height: '100px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
    },
    progressBar: {
        marginTop: theme.spacing(2),
    }
}));

const mockActivities = [
    {
        id: "0",
        title: "Robot Assembly",
        description: "Assemble a basic robot using provided components.",
        progress: 75,
        img: "https://plchldr.co/i/500x250?bg=111111",
    },
    {
        id: "1",
        title: "Plant Growth Monitor",
        description: "Setup IoT sensors to monitor and assess the growth of a plant.",
        progress: 40,
        img: "https://plchldr.co/i/500x250?bg=111111",
    }
];

const ExperiencesPage = () => {
    const classes = useStyles();

    return (
        <>
            <StudentNavigation />
            <div className={classes.root}>
                <Typography variant="h2" component="h2" gutterBottom className={classes.title}>Hands-On Activity Tracker</Typography>

                <Grid container spacing={4}>
                    {mockActivities.map(activity => (
                        <Grid item xs={12} md={6} key={activity.id}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={activity.img}
                                    title={activity.title}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {activity.title}
                                    </Typography>
                                    <Typography className={classes.cardDescription}>
                                        {activity.description}
                                    </Typography>
                                    <LinearProgress variant="determinate" value={activity.progress} className={classes.progressBar} />
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View Feedback
                                    </Button>
                                    <Button size="small" color="secondary">
                                        {activity.progress < 100 ? "Resume" : "Start"}
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

export default ExperiencesPage;
