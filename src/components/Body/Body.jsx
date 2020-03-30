import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import {typeCSBook} from '../../styles/typeTheme';

import { Landing } from '../Landing/landing';
import {Iniciativa} from '../Iniciativa/Iniciativa';

export const Body = () => {

    return (
        <React.Fragment>
            <ThemeProvider theme={typeCSBook}>
                <CssBaseline/>
                {/* Sections */}
                <Landing />
                

            </ThemeProvider>
        </React.Fragment>
    )
}