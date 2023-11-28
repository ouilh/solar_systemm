"use client"

import React from 'react';
import { Theme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import DefaultNavigationMobile from './DefaultNavigationMobile';
import DefaultNavigationDesktop from './DefaultNavigationDesktop';


function DefaultNavigation() {

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    if (isSmallScreen)
        return (<DefaultNavigationMobile />)
    else
        return (<DefaultNavigationDesktop />)

}

export default DefaultNavigation;
