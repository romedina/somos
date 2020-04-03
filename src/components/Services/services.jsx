import React from 'react'
import { Grid, Typography, Box, ThemeProvider, CssBaseline } from '@material-ui/core';
import { typeCSBold } from '../../styles/typeTheme';
import { Bullet } from '../../dumbComponents/Bullet/bullet';
import { servicesData } from '../../constants/services/services';

export function Services() {

    const renderBullets = () => {
        return (
            servicesData.map(element => {
                return (
                    <Grid key={element.description} item xs={12} lg={6}>
                        <Bullet
                            title={element.title}
                            description={element.description}
                        />
                    </Grid>
                )
            })
        )

    }

    return (
        <React.Fragment>
            <Box >
                <Grid
                    style={{ height: '100%' }}
                    container
                    justify='center'
                    alignItems='center'
                >
                    <Grid item xs={11} lg={8}>
                        <Box pt={{xs:10,lg:40}} pb={{xs:8,lg:35}}>
                            <Grid container justify='flex-end' >
                                <Grid item xs={12}>
                                    <ThemeProvider theme={typeCSBold}>
                                        <CssBaseline />
                                        <Typography variant='h5'> TU PROYECTO </Typography>
                                    </ThemeProvider>
                                </Grid>
                                <Grid item xs={11} lg={9}>
                                    <Box pt={5}>
                                        <Grid container justify='center' alignItems='center' spacing={5}>
                                            {renderBullets()}
                                        </Grid>
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
