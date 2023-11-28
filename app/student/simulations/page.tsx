"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';
import StudentNavigation from '@/app/components/nav/StudentNavigation';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from 'next/link'


export default function Simulation() {
  const [simulations, setSimulations] = useState([
    { id: 1, title: "Construire un noyau", desc: "Explain how the changing the number of neutrons or protons affects the atomic number and isotope species." },
    { id: 2, title: "Ondes sonores", desc: "Explain how different sounds are modeled, described, and produced." },
    { id: 3, title: "Mon Système Solaire", desc: "Prédire la masse nécessaire, la vitesse et la distance au Soleil d'une planète pour que cette planète ait une orbite circulaire autour d'un soleil." },
    { id: 4, title: "Construire un circuit (Labo virtuel) : AC", desc: "Construire des circuits à partir de dessins schématiques." },
    { id: 5, title: "Masses et Ressorts", desc: "Trouvez la relation entre la masse, la force du ressort (constante du ressort) et l'étirement (déplacement)." },
    { id: 7, title: "solar system", desc: "" },
  ]);

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <div>
    <AppBar position="static">
      <StudentNavigation />
      <Toolbar>
        <Typography variant="h2" component="h2" gutterBottom>Simulations</Typography>
      </Toolbar>
    </AppBar>

    <Container>
      <Grid container spacing={3}>
        {simulations.map((simulation) => (
          <Grid item xs={12} sm={6} md={4} key={simulation.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent>
                <Typography variant="h3" sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
                  {simulation.title}
                </Typography>
                <Typography component="div">
                  {simulation.desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ marginTop: 'auto' }}>
              <Link href={`/student/simulation/${simulation.id}`} style={{ textDecoration: 'none' }}>
                    <Button size="small">Let's Go</Button>
                  </Link>              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
  );
}
