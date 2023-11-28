'use client';


import React, { useState } from 'react';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import { Container,
         Theme, 
         Grid, 
         Card, 
         CardActionArea, 
         CardMedia,
         CardContent,
         Typography,
        } from '@mui/material';
import StudentNavigation from '@/app/components/nav/StudentNavigation';
import datas from "@/data.json";
import imgee from "@/app/favicon.png"


const useStyles = makeStyles((theme: Theme) => ({
root: {
    // margin:theme.spacing(0),
    // padding: theme.spacing(0),
    backgroundColor: '#FFFFFF',
    height: '100vh',
    width:'100vw',
    // flexDirection:'column',
},

GridContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    
},
CardContainer: {
    maxWidth: 345,
    minWidth: 300,
    margin: '30px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: '0.3s',
    '&:hover': {
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        transform: 'translateY(-4px)',
    },
},


}));


const CoursesPage = () => {

    const classes = useStyles();
    const listcard = datas.courses.map((data) =>                     
                                    <Card component={Link} href= {`/courses/course/${data.id}`} className= {classes.CardContainer}>
                                        <CardActionArea  >
                                            <CardMedia
                                            component="img"
                                            height="140"
                                            src = {data.img}
                                            alt="img"
                                            /> 
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {data.titel}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {data.content}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                );



    return(
        <div className={classes.root}>
            <StudentNavigation/>
            <Grid container className={classes.GridContainer} >
                {listcard}
            </Grid>
            
        
        </div>
    );


};

export default CoursesPage;