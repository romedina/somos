import React, { useState, useEffect } from 'react';
import { Grid, Typography, makeStyles, Button, ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import { landingStyles } from '../../styles/styles'
import { textOptions } from '../../constants/textOptions/textOptions';
import { typeRockSalt, typeCSBold } from '../../styles/typeTheme';
import CircularLogo from '../../assets/circularLogo.svg';
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
            <Box height='100vh' className={classes.mainContainer}>
                <Grid container justify='center' alignItems='flex-start'>
                    <Grid item xs={12}>
                        <Grid container justify='center' alignItems='center'>
                            <ThemeProvider theme={typeCSBold}>
                                <CssBaseline />
                                <Grid item lg={3}>
                                    <img className={classes.circularLogo} src={CircularLogo} alt='logo' />
                                </Grid>
                                <Grid item lg={6}>
                                    <Box p={5}>
                                        <Grid container justify='center' alignItems='center'>
                                            <Grid item md>
                                                <Button className={classes.whiteFont}>Iniciativa</Button>
                                            </Grid>
                                            <Grid item md>
                                                <Button className={classes.whiteFont}>Somos</Button>
                                            </Grid>
                                            <Grid item md>
                                                <Button className={classes.whiteFont}>Tu Proyecto</Button>
                                            </Grid>
                                            <Grid item md>
                                                <Button className={classes.whiteFont}>Beneficios</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item lg={3}>
                                    <Box p={5}>
                                        <Button className={classes.whiteBtn} variant='outlined' size='large'>Contacto</Button>
                                    </Box>
                                </Grid>
                            </ThemeProvider>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Box height='80vh' pt={'15%'} pl={10}>
                            <Grid container justify='center' alignItems='center'>
                                <Grid item xs>
                                    <ThemeProvider theme={typeCSBold}>
                                        <CssBaseline />
                                        <Typography align='right' className={classes.whiteFont} variant='h1'>SOM(</Typography>
                                    </ThemeProvider>
                                </Grid>
                                <Grid item xs>
                                    <ThemeProvider theme={typeRockSalt}>
                                        <CssBaseline />
                                        <Typography align='center' className={classes.whiteFont} variant='h1'>{currentWord}</Typography>
                                    </ThemeProvider>
                                </Grid>
                                <Grid item xs>
                                    <ThemeProvider theme={typeCSBold}>
                                        <CssBaseline />
                                        <Typography align='left' className={classes.whiteFont} variant='h1'>)S</Typography>
                                    </ThemeProvider>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container justify='center' alignItems='center'>
                            <Grid item xs={4}>
                                <Box pl={5}>
                                    <Typography align='left' className={classes.whiteFont} variant='subtitle1'> hola@somos.work</Typography>
                                </Box>

                            </Grid>
                            <Grid item xs={4}>
                                <Grid container justify='flex-end'>
                                    <Grid item xs={12}>
                                        <img className={classes.downArrow} src={DownArrow} alt='contact whatsapp' />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container justify='flex-end'>
                                    <Grid item xs={12}>
                                        <img className={classes.whatsappIcon} src={WhatsappIcon} alt='contact whatsapp' />
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}