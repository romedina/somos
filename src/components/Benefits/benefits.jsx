import React from 'react';
import { Grid, Typography, Box, makeStyles, ThemeProvider, CssBaseline } from '@material-ui/core';
import { benefitsStyles } from '../../styles/styles';
import { typeCSBold } from '../../styles/typeTheme';

const useStyles = makeStyles(benefitsStyles)

export const Benefits = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.mainContainer} pt={10} pb={8}>
                <Grid
                    container
                    style={{ height: '100%' }}
                    justify='center'
                    alignItems='center'
                >
                    <Grid item xs={11} md={10} lg={8}>
                        <Grid container justify='flex-start'>
                            <Grid item xs={12} lg={3}>
                                <ThemeProvider theme={typeCSBold}>
                                    <CssBaseline />
                                    <Typography className={classes.whiteType} variant='h5'>
                                        BENEFICIOS
                                    </Typography>
                                </ThemeProvider>
                            </Grid>
                            <Grid item xs={12} lg={9}>
                                <Typography className={classes.whiteType} variant='h6'>
                                Al sumarte a esta iniciativa, además de revitalizar tu actividad comercial y la de los demás, obtendrás los siguientes beneficios:
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}