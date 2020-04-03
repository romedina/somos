import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, ThemeProvider, CssBaseline, Hidden,Box } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import * as ColorSystem from '../../styles/colorSystem';
import { typeCSBook } from '../../styles/typeTheme'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '85vw',
    backgroundColor: 'black',
    color: 'white',
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  whiteType: {
    color: 'white'
  },
  blueType: {
    color: ColorSystem.regularBlue,
  },
  link:{
    textDecoration:'none',
    color: ColorSystem.regularBlue,
  }
}));

export function ContactModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
      >

        <div style={modalStyle} className={classes.paper}>
          <Box pt={2} pb={2}>
          <Grid container justify='center' alignItems='center'>
            <Grid item xs={10}>
              <Grid container justify='center' alignItems='center'>
                <Hidden mdDown>
                  <ThemeProvider theme={typeCSBook}>
                    <CssBaseline />
                    <Grid item xs={12}>
                      <Typography gutterBottom align='center' className={classes.whiteType} variant='h2'>¡Si te sumas <strong>somos</strong> más!</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='center' className={classes.whiteType} variant='h4'>Escríbenos a <a className={classes.link} href="mailto:hola@somos.work"><span className={classes.blueType}>hola@somos.work</span></a></Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='center' className={classes.whiteType} variant='h4'>o mándanos un mensaje a:</Typography>
                      <br />
                      <Typography align='center' className={classes.whiteType} variant='h5'>55 2253 9924 - CDMX</Typography>
                      <Typography align='center' className={classes.whiteType} variant='h5'>442 322 6166 - QRO</Typography>
                    </Grid>
                  </ThemeProvider>
                </Hidden>
                <Hidden lgUp>
                  <ThemeProvider theme={typeCSBook}>
                    <CssBaseline />
                    <Grid item xs={12}>
                      <Typography gutterBottom align='center' className={classes.whiteType} variant='h4'>¡Si te sumas <strong>somos</strong> más!</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='center' className={classes.whiteType} variant='h5'>Escríbenos a <a className={classes.link} href="mailto:hola@somos.work"><span className={classes.blueType}>hola@somos.work</span></a></Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='center' className={classes.whiteType} variant='h5'>o mándanos un mensaje a:</Typography>
                      <br />
                      <Typography align='center' className={classes.whiteType} variant='h6'>55 2253 9924 - CDMX</Typography>
                      <Typography align='center' className={classes.whiteType} variant='h6'>442 322 6166 - QRO</Typography>
                    </Grid>
                  </ThemeProvider>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
