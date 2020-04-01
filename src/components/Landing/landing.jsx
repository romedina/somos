import React, { useState, useEffect } from 'react';
import { Hidden, Grid, Typography, makeStyles, ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import { landingStyles } from '../../styles/styles'
import { textOptions } from '../../constants/textOptions/textOptions';
import { typeRockSalt, typeCSBold } from '../../styles/typeTheme';
import { Header } from '../Header/header'
import WhatsappIcon from '../../assets/whatsapp.svg';
import DownArrow from '../../assets/downArrow.svg';


const useStyles = makeStyles(landingStyles)

export const Landing = () => {
    const classes = useStyles();

    const [currentWord, setCurrentWord] = useState('')
    // const [currentChar,setCurrentChar] = useState(0)

    const writeWord = () => {
        let row = 0;
        let column = 0;
        let phrase = ''
        setInterval(() => {
            if (row < textOptions.length) {
                if (column < textOptions[row].length) {
                    // setCurrentWord( currentWord.concat(textOptions[row][column]))

                    phrase += textOptions[row][column]
                    setCurrentWord(phrase)
                    column += 1
                } else {
                    column = 0
                    row += 1;
                    phrase = ''
                }

            } else {
                clearInterval();
            }
        }, 150)

    }

    useEffect(() => {
        writeWord();
        // setCurrentWord(currentWord.concat('a'))

    }, [])




    return (
        <React.Fragment>
            <Box pb={2} className={classes.mainContainer}>
                <Grid container justify='center' alignItems='flex-start'>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>

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
                                {/* <Hidden mdUp>
                                    <Grid item xs>
                                        <ThemeProvider theme={typeCSBold}>
                                            <CssBaseline />
                                            <Typography align='right' className={classes.whiteFont} variant='h3'>som(</Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid item xs>
                                        <ThemeProvider theme={typeRockSalt}>
                                            <CssBaseline />
                                            <Typography align='center' className={classes.whiteFont} variant='h5'>{currentWord}</Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid item xs>
                                        <ThemeProvider theme={typeCSBold}>
                                            <CssBaseline />
                                            <Typography align='left' className={classes.whiteFont} variant='h3'>)s</Typography>
                                        </ThemeProvider>
                                    </Grid>
                                </Hidden> */}
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container justify='center' alignItems='center'>
                            <Grid item xs={12}>
                                <Grid container justify='flex-end'>
                                    <Grid item xs={12}>
                                        <img className={classes.downArrow} src={DownArrow} alt='contact whatsapp' />
                                    </Grid>
                                </Grid>
                            </Grid>
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


                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}