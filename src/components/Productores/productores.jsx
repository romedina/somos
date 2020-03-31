import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import { professionals } from '../../styles/styles';


const useStyles = makeStyles(professionals)

export const Productores = () => {

    const classes = useStyles();

    const professionals = [
        classes.gardener_bg,
        classes.doctor_bg,
        classes.sales_bg,
        classes.entrepreneur_bg,
    ]

    const profLabels = [
        'Te ayudamos a crear una tienda en línea a precio especial para que vendas tus productos desde casa y juntos superemos esta etapa. Ayúdanos a ayudarte',
        'Te ayudamos a crear una plataforma digital a precio especial para que des consulta desde casa y juntos superemos esta etapa. Ayúdanos a ayudarte.',
        'Te ayudamos a crear una tienda en línea a precio especial para que vendas tus productos desde casa y juntos superemos esta etapa. Ayúdanos a ayudarte',
        'Te ayudamos a crear una tienda en línea a precio especial para que vendas tus productos desde casa y juntos superemos esta etapa. Ayúdanos a ayudarte'
    ]




    const [currentBg, setCurrentBg] = useState(0);

    const nextBg = () => {
        setCurrentBg(prevBg => {
            if (prevBg < 3) {
                return prevBg + 1
            } else {
                return 0
            }
        });
    }


    useEffect(() => {
        const timerBg = setInterval(() => {
            nextBg()
        }, 8000)
        return () => {
            clearInterval(timerBg)
        }
    }, [])



    return (
        <React.Fragment>
            <Box className={professionals[currentBg]} height='100vh'>
                <Grid
                    container
                    justify='flex-start'
                    alignItems='flex-end'
                    style={{ height: '100%' }}>
                    <Grid item xs={6} md={5} lg={4}>
                        <Grid container justify='flex-start' alignItems='flex-start'>
                            <Grid item xs={12}>
                                <Box className={classes.blueContainer} p={4}>
                                    <Typography variant='subtitle1' className={classes.whiteFont}>{`${profLabels[currentBg]}`}</Typography>
                                </Box>                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}