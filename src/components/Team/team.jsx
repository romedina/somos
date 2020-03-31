import React from 'react';
import { Grid, Typography, Box, makeStyles, ThemeProvider, CssBaseline, Divider } from '@material-ui/core';
import { teamStyles } from '../../styles/styles';
import { typeCSBold } from '../../styles/typeTheme';
import tiposLibres from '../../assets/tiposlibres_logo.svg';
import ard from '../../assets/ard_logo.svg';


const useStyles = makeStyles(teamStyles);

export const Team = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.mainContainer}>
                <Grid container style={{ height: '100%' }} justify='center' alignItems='center'>
                    <Grid item xs={11} md={10} lg={8}>
                        <Box pt={10} pb={8}>
                            <Grid container justify='center' alignItems='flex-start' spacing={5}>
                                <Grid item md={3}>
                                    <ThemeProvider theme={typeCSBold}>
                                        <CssBaseline />
                                        <Typography variant='h5'>SOMOS</Typography>
                                    </ThemeProvider>
                                </Grid>
                                <Grid item md={9}>
                                    <Typography variant='h6'>Nace como respuesta al compromiso ético-profesional que los estudios mexicanos <strong>Tipos Libres</strong> y <strong>ARD</strong> sostenemos con la sociedad de nuestro país. Ambos, ante la problemática surgida por la contingencia mundial generada por el COVID-19, nos negamos a permanecer estáticos ante la disminución en las actividades comerciales originadas por el compromiso moral de <strong>quedarnos en casa</strong>.</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box p={5}>
                                        <Divider className={classes.divider} />
                                    </Box>
                                </Grid>
                                <Grid item lg={6}>
                                    <img className={classes.imgStd} src={tiposLibres} width={'30%'} alt='TiposLibres logo' />
                                    <Typography variant='h6'>
                                        Durante 30 años ha focalizado el talento de sus integrantes a la creación de marcas, estrategias de comunicación y publicidad desde Querétaro para todo el mundo.
                                    </Typography>
                                    <Box pt={3}>
                                        <div className={classes.tlBg}></div>
                                    </Box>
                                </Grid>
                                <Grid item lg={6}>
                                    <img className={classes.imgStd} src={ard} width={'20%'} alt='TiposLibres logo' />
                                    <Typography variant='h6'>
                                        ARD enfoca su ingenio al desarrollo de plataformas online, soluciones en la nube, desarrollo de sitios web y aplicaciones digitales especializadas en la experiencia del usuario.
                                    </Typography>
                                    <Box pt={3}>
                                        <div className={classes.ardBg}></div>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box p={10}>
                                        <ThemeProvider theme={typeCSBold}>
                                            <CssBaseline />
                                            <Typography className={classes.h4Title} align='center' variant='h5'>
                                                Nuestros equipos unen sus fuerzas para
                                                trabajar más rápido y así poner a tu alcance
                                                una herramienta de venta para tu negocio
                                                en el menor tiempo posible.
                                        </Typography>
                                        </ThemeProvider>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}