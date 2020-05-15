import React from 'react';
import { ThemeProvider, CssBaseline, Grid } from '@material-ui/core'
import { typeCSBook } from '../../styles/typeTheme';
import { Landing } from './landing';
import { Iniciativa } from './Iniciativa';
import { Productores } from './productores';
import { Team } from './team';
import { Services } from './Services/services';
import { Benefits } from './benefits';

export const Home = () => {
  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item xs={12}>
        <ThemeProvider theme={typeCSBook}>
          <CssBaseline />
          <Landing />
          <Iniciativa />
          <Productores />
          <Team />
          <Services />
          <Benefits />
        </ThemeProvider>
      </Grid>
    </Grid>
  )
}

export default Home
