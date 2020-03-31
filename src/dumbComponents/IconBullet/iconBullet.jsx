import React from 'react'
import {Grid, Typography, makeStyles} from '@material-ui/core';
import {benefitsStyles} from '../../styles/styles';

const useStyles = makeStyles(benefitsStyles)

export function IconBullet(props) {

    /* props ========
        description : string
        icon : object with string path 
    */

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container justify='center' alignItems='flex-start'>
                <Grid item xs={12}> 
                    <img width={'100%'} height={80} src={props.iconSrc} alt={props.description}/>
                </Grid>
                <Grid item xs={8}>
                    <Typography className={classes.whiteType} variant='subtitle1' align='center'>{`${props.description}`}</Typography>
                </Grid>
            </Grid>
        </React.Fragment>   
    )
}
