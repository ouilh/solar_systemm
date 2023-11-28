'use client'

import { useState, useEffect } from 'react';
import { CheckCircle, Pending, Lightbulb, Group, Timer } from '@mui/icons-material';
import { LinearProgress, Typography, Button, Divider, Paper, Grid } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Theme, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StudentNavigation from '@/app/components/nav/StudentNavigation';

interface Milestone {
    id: string;
    name: string;
    description: string;
    completed: boolean;
    progress?: number;
}

interface Milestones {
    milestones: Milestone[];
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'block',
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
    timeline: {
        maxHeight: '60vh',
        overflowY: 'auto',
        flex: 2,
        marginRight: theme.spacing(4),
        padding: theme.spacing(4),
        border: '1px solid #f4f4f4',
        borderRadius: '5px',
        backgroundColor: 'white',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        width: '100%'
    },
    timelineItem: {
        marginBottom: theme.spacing(4),
        alignItems: 'flex-start',
        display: 'flex',
    },
    timelineOppositeContent: {
        maxWidth: '30%',
        marginTop: '15px!important',
        paddingTop: theme.spacing(4),
        padding: '15px'
    },
    timelineContent: {
        paddingTop: 0,
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(1)
    },
    connector: {
        backgroundColor: '#ff0000',
        color: '#ff00ff',
        height: '50px'
    },
    completed: {
        color: '#16b200',
    },
    pending: {
        color: '#dc143c',
    },
    progress: {
        marginTop: theme.spacing(1),
    },
    // milestoneTooltip: {
    //     padding: '15px',
    // },
    milestoneName: {
        fontFamily: 'Roboto',
        color: '#6100f0',
        fontWeight: '500 !important',
    },
    milestoneLevel: {
        fontFamily: 'Montserrat',
        fontWeight: '300 !important',
    },
    customTooltip: {
        color: 'black!important',
        padding: '10px!important',
        backgroundColor: '#f4f4f4 !important',
        fontWeight: '200 !important',

    },
    container: {
        display: 'inline-block',
        justifyContent: 'space-between',
        width: '50%',
    },
    milestonesColumn: {
        //backgroundColor: 'yellow!important',
        borderColor: 'yellow!important',
        flex: 1,
        padding: theme.spacing(4),
        verticalAlign: 'top!important'
    },
    adviceColumn: {
        marginLeft: theme.spacing(4),
        //backgroundColor: 'yellow!important',
        padding: theme.spacing(4),
        borderRadius: theme.spacing(2),
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    subTitle: {
        fontFamily: 'Roboto',
        color: '#black!important',
        fontWeight: '500!important',
        fontSize: '1.8rem!important',
        marginBottom: '10px!important',
    },
    tip: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
    tipIcon: {
        marginRight: theme.spacing(2),
        color: '#6100f0',
    },
    divider: {
        padding: '20px!important',
    },
}));

const mockData = {
    milestones: [
        {
            id: "0",
            name: "You Started Growing...",
            description: "During your journey, you will learn several crucial concepts based on intuition and practice.",
            completed: true
        },
        {
            id: "1",
            name: "Master Linear Equations",
            description: "Understood and practiced solving linear equations.",
            completed: true
        },
        {
            id: "2",
            name: "Simple Robot Construction",
            description: "Built a basic robot using a beginner's robotics kit.",
            completed: true
        },
        {
            id: "3",
            name: "Understand Newton's Laws",
            description: "Grasped all three of Newton's laws in Physics.",
            completed: true
        },
        {
            id: "4",
            name: "First Mobile App Development",
            description: "Developed a basic mobile application.",
            completed: false,
            progress: 60
        },
        {
            id: "5",
            name: "Advanced Robotics Mechanics",
            description: "Explored robotics concepts, like sensors and actuators.",
            completed: false,
            progress: 30
        },
        {
            id: "6",
            name: "Master Quadratic Equations",
            description: "Understood and practiced solving quadratic equations.",
            completed: true
        },
        {
            id: "7",
            name: "Electromagnetic Theory",
            description: "Grasped the principles behind electromagnetism in Physics.",
            completed: true
        },
        {
            id: "8",
            name: "Sensor-Driven Robot Creation",
            description: "Constructed a robot responding to environmental stimuli using sensors.",
            completed: false,
            progress: 85
        },
        {
            id: "9",
            name: "Advanced Programming Course",
            description: "Started advanced coding techniques, including object-oriented programming.",
            completed: false,
            progress: 40
        },
        {
            id: "10",
            name: "Introduction to Calculus",
            description: "Began studying basic calculus concepts like differentiation and integration.",
            completed: false,
            progress: 20
        }
    ]
};

const JourneyPage = () => {

    const classes = useStyles();
    const [data, setData] = useState<Milestones | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setData(mockData);
        }, 1000);
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <>
            <StudentNavigation />

            <Typography variant="h2" component="h2" gutterBottom className={classes.title}>My Learning Journey</Typography>

            <Grid container className={classes.root}>

                <Grid item className={classes.container}>

                    <Paper elevation={3} className={classes.milestonesColumn}>

                        <Timeline className={classes.timeline}>

                            {data.milestones.map(milestone => (
                                <TimelineItem key={milestone.id} className={classes.timelineItem}>
                                    <TimelineOppositeContent className={classes.timelineOppositeContent}>
                                        <Typography variant="body2" color="textSecondary">
                                            Monday Oct 22th 2023
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot>
                                            <Tooltip title={milestone.description} classes={{ tooltip: classes.customTooltip }}>
                                                {milestone.completed ? <CheckCircle className={classes.completed} /> : <Pending className={classes.pending} />}
                                            </Tooltip>
                                        </TimelineDot>
                                        <TimelineConnector className={classes.connector} />
                                    </TimelineSeparator>
                                    <TimelineContent className={classes.timelineContent}>
                                        <Typography className={classes.milestoneName}>{milestone.name}</Typography>
                                        <Typography className={classes.milestoneLevel}>Master 3 (level)</Typography>
                                        {!milestone.completed && milestone.progress && (
                                            <LinearProgress variant="determinate" value={milestone.progress} className={classes.progress} color="secondary" />
                                        )}
                                    </TimelineContent>
                                </TimelineItem>
                            ))}

                        </Timeline>
                    </Paper>

                    <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        View All Tasks
                    </Button>

                </Grid>

                <Grid className={classes.container}>
                    <Paper elevation={3} className={classes.adviceColumn}>
                        <Typography variant="h5" gutterBottom className={classes.subTitle}>Learning Tips:</Typography>
                        <div className={classes.tip}>
                            <Lightbulb className={classes.tipIcon} />
                            <Typography variant="body1">Engage in active learning. Hands-on projects can deepen understanding.</Typography>
                        </div>
                        <div className={classes.tip}>
                            <Group className={classes.tipIcon} />
                            <Typography variant="body1">Collaborate with peers. Teaching others reinforces your understanding.</Typography>
                        </div>
                        <div className={classes.tip}>
                            <Timer className={classes.tipIcon} />
                            <Typography variant="body1">Stay consistent. Habitual learning improves retention.</Typography>
                        </div>
                        <Divider className={classes.divider} />
                        <Typography variant="h6" gutterBottom className={classes.subTitle}>Recommended:</Typography>
                        <Typography variant="body1">Consider joining a study group or finding a mentor in the field to guide you.</Typography>
                    </Paper>
                </Grid>
            </Grid >
        </>
    );
};

export default JourneyPage;