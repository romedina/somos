import React from 'react';
import {Grid, Box, Typography, makeStyles} from '@material-ui/core';
import { footerStyles } from '../../styles/styles';

const useStyles = makeStyles(footerStyles);

export const Footer = () =>{
  const classes = useStyles()
  return(
    <Box className={classes.mainContainer} pt={10} pb={8}>
      <Grid 
      style={{height:'100%'}}
      container 
      justify='center'
      alignItems='center'
      >
        <Grid item xs={11} lg={10}>
          <Grid container>
            <Grid item xs={12} lg={10}>
              <Typography className={classes.whiteType}><strong>somos</strong> Todos los Derechos Reservados, 2020.</Typography>
              <Typography className={classes.whiteType}>hola@somos.work</Typography>
            </Grid>
            <Grid item xs={12} lg={2}>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
