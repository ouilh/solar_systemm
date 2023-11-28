'use client'

import { useState } from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    FormControlLabel,
    Checkbox,
    Paper,
    Typography,
    Grid,
    Theme,
    Box
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import StudentNavigation from '@/app/components/nav/StudentNavigation';
import { MathJax, MathJaxContext } from 'better-react-mathjax';


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
    chatBox: {
        maxHeight: '60vh',
        overflowY: 'auto',
        flex: 2,
        marginRight: theme.spacing(4),
        padding: theme.spacing(4),
        border: '1px solid #f4f4f4',
        borderRadius: '5px',
        backgroundColor: 'white',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    chatMessage: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        borderRadius: '5px',
        backgroundColor: '#e6e6e6',
    },
    promptBox: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: '20px 20px 20px 0',
    },
    Label: {
        // marginBotton: '50px!important',
        // marginTop: '50px!important',
    },
}));


interface Message {
    role: string;
    content: string;
}


const Advisor = () => {

    const classes = useStyles();
    const [domain, setDomain] = useState('');
    const [randomConcept, setRandomConcept] = useState('');
    const [answerLength, setAnswerLength] = useState(500);
    const [level, setLevel] = useState('');
    const [useFormulas, setUseFormulas] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);


    const handleRandom = async () => {
        setRandomConcept("Just pick a random " + domain + " concept; suitable for the level " + level);
        setAnswerLength(150)
        handleSend()
    }


    const handleSend = async () => {

        const newMessage: Message = { role: 'user', content: prompt + " . " + randomConcept };
        setMessages(prev => [...prev, newMessage]);

        try {
            const requestBody = {
                domain: domain,
                level: level,
                randomConcept: randomConcept,
                answerLength: answerLength,
                messages: [...messages, newMessage],
            };

            console.info('requestBody: ', JSON.stringify(requestBody));

            const response = await fetch('http://localhost:3000/api/ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(`Error: ${responseData.error || 'Unknown error occurred (backend)'}`);
            }

            console.info('responseData:', JSON.stringify(responseData));


            const aiMessageContent = responseData.message || "Sorry, I couldn't understand that.";
            const aiMessage: Message = { role: 'assistant', content: aiMessageContent };


            console.info('aiMessage:', JSON.stringify(aiMessage));

            setMessages(prev => [...prev, aiMessage]);

        } catch (error) {
            console.error('Error fetching AI response:', error);
            console.info('error:', JSON.stringify(error));
            // Optionally handle the error in UI, like showing an error message to the user
        }

        // Clear the prompt
        setPrompt('');
        setRandomConcept('');
        setAnswerLength(800)
    };

    return (
        <>
            <StudentNavigation />

            <Grid container className={classes.root}>
                <Typography variant="h2" component="h2" gutterBottom className={classes.title}>AI Advisor</Typography>

                <Grid item xs={12}>
                    <FormControl fullWidth margin="none">
                        <InputLabel className={classes.Label}>Domain</InputLabel>
                        <Select value={domain} onChange={e => setDomain(e.target.value)}>
                            {['mathematics', 'physics', 'chemistry', 'STEM', 'biology', 'geology', 'robotics', 'programming', 'algorithmics'].map(d => (
                                <MenuItem key={d} value={d}>{d}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Level (Age)</InputLabel>
                        <Select value={level} onChange={e => setLevel(e.target.value)}>
                            {[...Array.from(Array(17).keys())].map((i: number) => (
                                <MenuItem key={i} value={i + 1}>Level {i + 1} ({6 + i} years old)</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox checked={useFormulas} onChange={e => setUseFormulas(e.target.checked)} />}
                        label="Use Formulas"
                    />
                </Grid>
                <Grid item xs={12} className={classes.promptBox}>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        placeholder="Enter your question..."
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSend} className={classes.button} > Send</Button>
                    <Button variant="outlined" color="secondary" onClick={handleRandom} className={classes.button} > Random Concept</Button>
                </Grid >
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.chatBox}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={classes.chatMessage}>
                                <MathJaxContext>
                                    <MathJax>
                                        {/* <Typography variant="body1"><strong>{msg.role}:</strong> {msg.content}</Typography> */}
                                        <span dangerouslySetInnerHTML={{ __html: `<strong>${msg.role}:</strong> ${msg.content}` }} />;
                                    </MathJax>
                                </MathJaxContext>
                            </div>
                        ))}
                    </Paper>
                </Grid>
            </Grid >
        </>
    );
};

export default Advisor;
