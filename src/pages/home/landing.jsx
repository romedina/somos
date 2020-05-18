import React, { useState, useEffect } from 'react';
import { Hidden, Grid, Typography, makeStyles, ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import { landingStyles } from '../../styles/styles'
import { textOptions } from '../../constants/textOptions/textOptions';
import { typeRockSalt, typeCSBold } from '../../styles/typeTheme';
import WhatsappIcon from '../../assets/whatsapp.svg';
import DownArrow from '../../assets/downArrow.svg';


const useStyles = makeStyles(landingStyles)

export const Landing = () => {
  const classes = useStyles();

  const [currentWord, setCurrentWord] = useState('')

  const writeWord = () => {
    let row = 0;
    let column = 0;
    let phrase = ''
    const intervalId = setInterval(() => {
      if (row < textOptions.length) {
        if (column < textOptions[row].length) {
          phrase += textOptions[row][column]
          setCurrentWord(phrase)
          column += 1
        } else {
          column = 0
          row += 1;
          phrase = ''
        }
      } else clearInterval(intervalId)
    }, 150)
    return intervalId
  }

  useEffect(() => {
    const intervalId = writeWord()
    return () => clearInterval(intervalId)
  }, [])




  return (
    <React.Fragment>
      <Box pb={2} className={classes.mainContainer}>
        <Grid container justify='center' alignItems='flex-start'>
          <Grid item xs={12}>
            <Box height='70vh'>
              <Grid container style={{ height: '100%' }} justify='center' alignItems='center'>

                <Hidden smDown>
                  <ThemeProvider theme={typeCSBold}>
                    <CssBaseline />
                    <Typography className={classes.whiteFont} variant='h1'>som(</Typography>
                  </ThemeProvider>

                  <ThemeProvider theme={typeRockSalt}>
                    <CssBaseline />
                    <Typography className={classes.whiteFont} variant='h3'>{currentWord}</Typography>
                  </ThemeProvider>

                  <ThemeProvider theme={typeCSBold}>
                    <CssBaseline />
                    <Typography className={classes.whiteFont} variant='h1'>)s</Typography>
                  </ThemeProvider>
                </Hidden>
                <Hidden mdUp>
                  <ThemeProvider theme={typeCSBold}>
                    <CssBaseline />
                    <Typography className={classes.whiteFont} variant='h4'>som(</Typography>
                  </ThemeProvider>

                  <ThemeProvider theme={typeRockSalt}>
                    <CssBaseline />
                    <Typography className={classes.whiteFont} variant='h6'>{currentWord}</Typography>
                  </ThemeProvider>

                  <ThemeProvider theme={typeCSBold}>
                    <CssBaseline />
                    <Typography className={classes.whiteFont} variant='h4'>)s</Typography>
                  </ThemeProvider>
                </Hidden>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12}>
                <img className={classes.downArrow} src={DownArrow} alt='contact whatsapp' />
              </Grid>
              <Hidden mdDown>
                <Grid item xs={6}>
                  <Box pl={5}>
                    <Typography align='left' className={classes.whiteFont} variant='subtitle1'> hola@somos.work</Typography>
                  </Box>

                </Grid>

                <Grid item xs={6}>
                  <Box pr={5}>
                    <img className={classes.whatsappIcon} src={WhatsappIcon} alt='contact whatsapp' />
                  </Box>
                </Grid>
              </Hidden>


            </Grid>

          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}