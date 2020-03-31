import React from 'react';
import {Grid,Box, Typography} from '@material-ui/core';

export const Iniciativa = () =>{
    return(
        <React.Fragment>
            <Box height='100vh'>
                <Grid container justify='center' alignItems='center' style={{height:'100%'}}>
                    <Grid item xs={12}>
                        <Typography>Iniciativa</Typography>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}