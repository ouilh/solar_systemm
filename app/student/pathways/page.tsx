'use client'
import { useState } from 'react';
import {
    Theme,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Grid
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import StudentNavigation from '@/app/components/nav/StudentNavigation';

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

const PathwaysPage = () => {
    const classes = useStyles();

    return (
        <>
            <StudentNavigation />

            <div className={classes.root}>
                <Typography variant="h2" component="h2" gutterBottom className={classes.title}>Educational Pathways</Typography>

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
                                    <Button size="small" color="primary">
                                        View Curriculum
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

export default PathwaysPage;
