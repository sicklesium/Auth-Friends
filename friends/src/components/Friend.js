import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

function Friend({ friend }) {
    return (
        <Grid item xs={12} sm={4} >
            <Paper className="paper">
                <Typography variant='h5'>{friend.name}</Typography>
                <Typography variant='body1'>Age: {friend.age}</Typography>
                <Typography variant='body1'>Email: {friend.email}</Typography>
            </Paper>
        </Grid>
    );
}

export default Friend;