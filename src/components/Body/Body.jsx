import React from 'react';
import { ThemeProvider, CssBaseline, Grid } from '@material-ui/core'
import { typeCSBook } from '../../styles/typeTheme';

import { Landing } from '../Landing/landing';
import { Iniciativa } from '../Iniciativa/Iniciativa';
import { Productores } from '../Productores/productores';
import { Team } from '../Team/team';
import { Services } from '../Services/services';
import { Benefits } from '../Benefits/benefits';
import { Footer } from '../Footer/footer';

export const Body = () => {

    return (
        <React.Fragment>
            <Grid container justify='center' alignItems='center' style={{width:'100vw',overflow:'hidden'}}>
                <Grid item xs={12}>
                    <ThemeProvider theme={typeCSBook}>
                        <CssBaseline />
                        {/* Sections */}
                        <Landing />
                        <Iniciativa />
                        <Productores />
                        <Team />
                        <Services />
                        <Benefits />
                        <Footer />

                    </ThemeProvider>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}