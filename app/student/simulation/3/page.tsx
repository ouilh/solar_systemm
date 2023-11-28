
"use client";
import React, { useState } from 'react';
import StudentNavigation from '@/app/components/nav/StudentNavigation';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
}));

const Layout = () => {
  const classes = useStyles();
  const [iframeSrc, setIframeSrc] = useState('https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html?locale=fr');

  return (
    <div className={classes.root}>
      <StudentNavigation />
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Layout;
