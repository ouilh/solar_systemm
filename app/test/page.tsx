'use client'

import React, { useState } from 'react';
import {
    Theme, Typography, Card, CardMedia, CardContent, CardActions,
    Button, Grid, Tooltip, Modal, Link, Container, Divider
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import StudentNavigation from '@/app/components/nav/StudentNavigation';

const useStyles = makeStyles((theme: Theme) => ({
    // root: {
    //     padding: theme.spacing(4),
    //     backgroundColor: '#f4f4f4',
    //     minHeight: '100vh',
    // },
    // title: {
    //     marginTop: theme.spacing(6),
    //     marginBottom: theme.spacing(6),
    //     color: '#6100f0',
    //     fontWeight: '300!important',
    //     fontSize: '3rem!important',
    // },
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
    enrolledCourseCard: {

    },
    suggestionCard: {

    },
    // modal: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // paper: {
    //     backgroundColor: theme.palette.background.paper,
    //     border: '2px solid #000',
    //     boxShadow: theme.shadows[5],
    //     padding: theme.spacing(2, 4, 3),
    // },
}));

const mockPathways = [
    {
        id: "0",
        title: "Pathway to Robotics",
        description: "A step-by-step journey from beginner to advanced robotics concepts. Dive deep into AI and mechanics.",
        milestones: ["Introduction to Robotics", "Robot Building Basics", "Advanced Robotic Mechanics", "Robotics Programming and Automation"],
        img: "https://plchldr.co/i/640x480?bg=6100f0"
    },
    {
        id: "1",
        title: "Mastering Mathematics",
        description: "Master fundamental to advanced mathematical concepts crucial in several STEM areas. Algebra, calculus and more.",
        milestones: ["Basics of Algebra", "Trigonometry & Geometry", "Calculus", "Advanced Mathematical Theorems"],
        img: "https://plchldr.co/i/640x480?bg=6100f0"
    }
];

const enrolledCourses = [
    { id: "0", title: "Intro to AI", progress: "50%" },
    { id: "1", title: "Data Structures", progress: "75%" },
    { id: "2", title: "Machine Learning", progress: "30%" },
    { id: "3", title: "Deep Learning", progress: "10%" },
    { id: "4", title: "Robotics", progress: "60%" },
    { id: "5", title: "Computer Vision", progress: "90%" },
];

const courseSuggestions = [
    { id: "0", title: "Natural Language Processing" },
    { id: "1", title: "Reinforcement Learning" },
    { id: "2", title: "Quantum Computing" },
    { id: "3", title: "Blockchain Technology" },
];

const PathwaysPage = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [currentPathway, setCurrentPathway] = useState<any>(null);

    const handleOpen = (pathway: any) => {
        setCurrentPathway(pathway);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentPathway(null);
    };

    return (
        <>
            <StudentNavigation />
            <Container maxWidth={false}>
                <Typography variant="h2" component="h2" color="primary" gutterBottom >
                    Educational Pathways
                </Typography>

                {/* Pathways */}
                <Typography variant="h4" component="h4" color="secondary" gutterBottom>
                    Recent Courses
                </Typography>
                <Grid container spacing={4}>
                    {mockPathways.map(pathway => (
                        <Grid item xs={12} md={6} key={pathway.id}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={pathway.img}
                                    title={pathway.title}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {pathway.title}
                                    </Typography>
                                    <Typography className={classes.cardDescription}>
                                        {pathway.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Tooltip title="Click to view detailed curriculum">
                                        <Button size="small" color="primary" onClick={() => handleOpen(pathway)}>
                                            View Curriculum
                                        </Button>
                                    </Tooltip>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Divider />

                {/* Enrolled Courses */}
                <Typography variant="h4" component="h4" color="secondary" gutterBottom>
                    Your Enrolled Courses
                </Typography>
                <Grid container spacing={2}>
                    {enrolledCourses.map(course => (
                        <Grid item xs={12} md={4} key={course.id}>
                            <Card className={classes.enrolledCourseCard}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {course.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        Progress: {course.progress}
                                    </Typography>
                                    <Link href={`/course/${course.id}/progress`}>
                                        View Progress
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Divider />

                {/* Course Suggestions */}
                <Typography variant="h4" component="h4" color="secondary" gutterBottom>
                    Course Suggestions
                </Typography>
                <Grid container spacing={2}>
                    {courseSuggestions.map(course => (
                        <Grid item xs={12} md={3} key={course.id}>
                            <Card className={classes.suggestionCard}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {course.title}
                                    </Typography>
                                    <Button size="small" color="primary">
                                        Explore
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <div>
                        <h2>{currentPathway?.title}</h2>
                        <p>{currentPathway?.description}</p>
                        <ul>
                            {currentPathway?.milestones?.map((milestone: string, index: number) => (
                                <li key={index}>{milestone}</li>
                            ))}
                        </ul>
                    </div>
                </Modal>
            </Container>
        </>
    );
};

export default PathwaysPage;
