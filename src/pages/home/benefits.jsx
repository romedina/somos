import React from 'react';
import { Grid, Typography, Box, makeStyles, ThemeProvider, CssBaseline } from '@material-ui/core';
import { benefitsStyles } from '../../styles/styles';
import { typeCSBold } from '../../styles/typeTheme';
import { benefitsItems } from '../../constants/benefits/benefitsItems';
import { IconBullet } from '../../dumbComponents/IconBullet/iconBullet';


const useStyles = makeStyles(benefitsStyles)

export const Benefits = () => {
    const classes = useStyles();
    const renderBullets = () => {
        return (
            benefitsItems.map(element => {
                // console.log('element.icon', element.icon)
                return (
                    <Grid key={element.description} item xs={12} md={6} lg={4}>
                        <IconBullet
                            iconSrc={element.icon}
                            description={element.description}
                        />
                    </Grid>
                )
            })
        )

    }

    return (
        <React.Fragment>
            <div id='beneficios'>
                <Box className={classes.mainContainer} pt={{xs:10,lg:40}} pb={{xs:8,lg:35}} style={{minHeight:'100vh'}}>
                    <Grid
                        container
                        style={{ height: '100%' }}
                        justify='center'
                        alignItems='center'
                    >
                        <Grid item xs={11} md={10} lg={8}>
                            <Grid container justify='center' alignItems='center'>
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
                                <Grid item xs={12}>
                                    <Box pt={10}>
                                        <Grid container spacing={5} justify='flex-start' alignItems='center'>

                                            {renderBullets()}
                                            <Grid item xs={12} md={6} lg={8}>
                                                <Grid container justify='flex-end' alignItems='center'>
                                                    <Grid item xs={4}>
                                                        <img src='https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Icons%2FsomosArrow.svg?alt=media&token=0231a843-3e2a-4792-8779-90264cc49fce' alt='logo with arrow' />
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Typography className={classes.whiteType} variant='h5'>Con el aporte de tu proyecto estarás ayudando a que otros menos afortunados también tengan acceso a los beneficios para su negocio.</Typography>
                                                    </Grid>

                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </React.Fragment>
    )
}