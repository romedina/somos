import React, { useState } from 'react';
import { Grid, Box, Button, makeStyles, ThemeProvider, CssBaseline, Hidden } from '@material-ui/core';
import CircularLogo from '../../assets/circularLogo.svg';
import { typeCSBold } from '../../styles/typeTheme';
import { landingStyles } from '../../styles/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles(landingStyles)

export function Header() {

    const classes = useStyles();
    const [isContactVisible, setIsContactVisible] = useState();

    return (
        <React.Fragment>
            <Grid container justify='center' alignItems='center'>
                <ThemeProvider theme={typeCSBold}>
                    <CssBaseline />
                    <Grid item xs={3} lg={3}>
                        <img className={classes.circularLogo} src={CircularLogo} alt='logo' />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={3} lg={6}>
                            <Box p={5}>
                                <Grid container justify='center' alignItems='center'>
                                    <Grid item xs md>
                                        <Link
                                            activeClass='active'
                                            to='iniciativa'
                                            spy={true}
                                            smooth={true}
                                            offset={-20}
                                            duration={500}
                                        >
                                            <Button className={classes.whiteFont}>Iniciativa</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs md>
                                        <Link
                                            activeClass='active'
                                            to='somos'
                                            spy={true}
                                            smooth={true}
                                            offset={-20}
                                            duration={500}
                                        >
                                            <Button className={classes.whiteFont}>Somos</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs md>
                                        <Link
                                            activeClass='active'
                                            to='tuProyecto'
                                            spy={true}
                                            smooth={true}
                                            offset={-20}
                                            duration={500}
                                        >
                                            <Button className={classes.whiteFont}>Tu Proyecto</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs md>
                                        <Link
                                            activeClass='active'
                                            to='beneficios'
                                            spy={true}
                                            smooth={true}
                                            offset={-20}
                                            duration={500}
                                        >
                                            <Button className={classes.whiteFont}>Beneficios</Button>
                                        </Link>
                                    </Grid>

                                    {/* <Grid item xs md>
                                    <Button className={classes.whiteFont}>Iniciativa</Button>
                                </Grid>
                                <Grid item xs md>
                                    <Button className={classes.whiteFont}>Somos</Button>
                                </Grid>
                                <Grid item xs md>
                                    <Button className={classes.whiteFont}>Tu Proyecto</Button>
                                </Grid>
                                <Grid item xs md>
                                    <Button className={classes.whiteFont}>Beneficios</Button>
                                </Grid> */}
                                </Grid>
                            </Box>
                        </Grid>
                    </Hidden>
                    <Grid item lg={3}>
                        <Box p={5}>
                            <Button className={classes.whiteBtn} variant='outlined' size='large'>Contacto</Button>
                        </Box>
                    </Grid>
                </ThemeProvider>
            </Grid>
        </React.Fragment>
    )
}
