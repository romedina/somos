import React, { useState, useEffect } from 'react';
import { Grid, Typography, makeStyles, ThemeProvider, CssBaseline } from '@material-ui/core';
import { landingStyles } from '../../styles/styles'
import { textOptions } from '../../constants/textOptions/textOptions';
import { typeRockSalt, typeCSBold } from '../../styles/typeTheme';

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

    console.log(currentWord)



    return (
        <React.Fragment>
            <Grid container className={classes.mainContainer} justify='center' alignItems='center'>
                <Grid item> 
                    <ThemeProvider theme={typeCSBold}>
                    <CssBaseline />

                    <Typography variant='h1' className={classes.whiteFont} display='inline'>SOM(</Typography>
                    <ThemeProvider theme={typeRockSalt}>
                        <CssBaseline />
                        <Typography variant='h2' className={classes.whiteFont} display='inline'>
                            {currentWord}
                        </Typography>
                    </ThemeProvider>
                    <Typography variant='h1' className={classes.whiteFont} display='inline'>)S</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}