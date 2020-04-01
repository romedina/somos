import React from 'react'
import {Grid,Typography, Paper, Box} from '@material-ui/core';

export function contactModal() {
    return (
        <div>
            <Grid container>
                <Grid item>
                    <Paper>
                        <Box p={10}>
                            <Typography>Contacto</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
