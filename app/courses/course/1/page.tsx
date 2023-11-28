"use client";
import Reveal from 'reveal.js';
import Markdown from "reveal.js/plugin/markdown/markdown";
import { useEffect } from 'react';
import Quiz from '@/app/components/Quiz';


import '/node_modules/reveal.js/dist/reveal.css';
import '/node_modules/reveal.js/dist/theme/white.css';
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
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: '#16b200',
        
    },
    color2 :{
        color:'#6100f0',
    },
    quiz:{
        color: '#16b200',
        fontSize: '10px',

    }
}));


export default function Slide(){
    const classes = useStyles();
        useEffect(() => {
                Reveal.initialize({
                    controls:true,
                    width:1000,
                    height:1000,
                    margin: 0.1,
                    display:true,
                    plugins: [ Markdown ]
                });
            }, []);
            
    return(
        <>
            <div className="reveal">
            <div className="slides">
                <section className={classes.root}>Circuit RLC</section>
                                  <section data-state="make-it-pop">
                                      <section className={classes.color2}>Objectifs</section>
                                      <section   ><h1 >Quiz</h1>
                                        <Quiz></Quiz>
                                      </section>
                                  </section>
            </div>
        </div>
        </>    
    )
}