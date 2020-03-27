import React from 'react';
import { Landing } from '../Landing/landing'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import {typeCSBook} from '../../styles/typeTheme';

export const Body = () => {

    return (
        <React.Fragment>
            <ThemeProvider theme={typeCSBook}>
                <CssBaseline/>
                <Landing />
            </ThemeProvider>
        </React.Fragment>
    )
}