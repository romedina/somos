import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { typeCSBook } from '../../styles/typeTheme';

import { Landing } from '../Landing/landing';
import { Iniciativa } from '../Iniciativa/Iniciativa';
import {Productores} from '../Productores/productores';

export const Body = () => {

    return (
        <React.Fragment>
            <ThemeProvider theme={typeCSBook}>
                <CssBaseline />
                {/* Sections */}
                <Landing />
                <Iniciativa/>
                <Productores/>
            </ThemeProvider>
        </React.Fragment>
    )
}