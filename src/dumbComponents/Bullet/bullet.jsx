import React from 'react'
import { Grid, Typography, ThemeProvider, CssBaseline, makeStyles } from '@material-ui/core';
import { typeCSBold } from '../../styles/typeTheme';
import {bulletsStyle} from '../../styles/styles';

const useStyles = makeStyles(bulletsStyle); 

export function Bullet(props) {

    /*
        props ====
        title : string
        description : string
    */

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid
                container
                justify='center'
                alignItems='flex-start'
            >
                <Grid item xs={12}>
                    <ThemeProvider theme={typeCSBold}>
                        <CssBaseline />
                        <Typography className={classes.title}  variant='h5'> {`${props.title}:`} </Typography>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='subtitle1'>{`${props.description}`}</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}