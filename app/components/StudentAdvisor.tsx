"use client"

import React, { useState } from 'react';
import {
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    Button,
    Box,
    Divider,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Theme,
    ButtonGroup,
    Stack,
    Tooltip,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
//import { AddAPhotoIcon as ScanIcon } from '@mui/icons-material/AddAPhoto';
//import { AddAPhotoIcon as ScanIcon } from '@mui/icons-material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme: Theme) => ({
    cardContent: {
    },
    elementSpacing: {
    },

}));


interface Message {
    id: number;
    content: string;
    sender: 'student' | 'advisor';
}


function StudentAdvisor() {

    const [prompt, setPrompt] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

    const classes = useStyles();

    const handleSendPrompt = () => {
        if (prompt.trim() !== '') {
            setMessages([...messages, prompt]);
            setPrompt('');
        }
    };

    return (

        <Container maxWidth="lg">

            <Grid container spacing={4}>

                <Grid item xs={12} sm={12} md={6} lg={8} >
                    <Box my={4}>
                        <Typography variant="h4" component="h1" align="right" color="primary" gutterBottom>
                            Student Advisor
                        </Typography>
                    </Box>
                    <Box mb={4}>
                        <Divider />
                    </Box>
                    <Box my={4}>
                        <TextField
                            label="Type your message"
                            fullWidth
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            variant="outlined"
                            margin="normal"
                        />
                        <ButtonGroup>
                            <IconButton color="primary" onClick={handleSendPrompt}>
                                <Tooltip title="Send prompt">
                                    <SendIcon />
                                </Tooltip>
                            </IconButton>
                            <IconButton color="secondary" onClick={handleSendPrompt}>
                                <Tooltip title="Quick scan">
                                    <AddAPhotoIcon />
                                </Tooltip>
                            </IconButton>
                        </ButtonGroup>
                    </Box>
                    <Box mb={1}>
                        <Divider />
                    </Box>
                    <Box mb={4}>
                        <Typography variant="h6" component="h2">
                            Student Prompts
                        </Typography>
                        <TextField
                            label="Ask a question or share your thoughts"
                            multiline
                            rows={3}
                            fullWidth
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            variant="outlined"
                            margin="normal"
                        />
                        <ButtonGroup>
                            <Button variant="contained" color="primary" onClick={handleSendPrompt}>
                                Send Prompt
                            </Button>
                            <Button variant="outlined" color="primary" onClick={handleSendPrompt}>
                                Quick Scan
                            </Button>
                        </ButtonGroup>
                    </Box>
                    <Box mb={1}>
                        <Divider />
                    </Box>
                    <Box mb={4}>
                        <Typography variant="h6" component="h2">
                            Discussion Messages
                        </Typography>
                        <List>
                            {messages.map((message, index) => (
                                <ListItem key={index}>
                                    <ListItemAvatar>
                                        <Avatar alt="User Avatar" src="/avatar.png" />
                                    </ListItemAvatar>
                                    <ListItemText primary={message} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4} >
                    <Box my={4}>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="h2">
                                        Discuss Ideas
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Engage in discussions and brainstorm ideas with your peers
                                        to enhance your learning experience.
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Start Discussion
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box mb={4}>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="h2">
                                        Use Advice Templates
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Use ready templates to explores differents ways of getting
                                        help from your AI advisor.
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        View Templates
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box mb={4}>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="h2">
                                        Ask your Mentor
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Need assistance with a specific topic or concept ? Ask for help
                                        from you assigned mentor.
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Request Help
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>

            </Grid >

        </Container >
    );
}

export default StudentAdvisor;