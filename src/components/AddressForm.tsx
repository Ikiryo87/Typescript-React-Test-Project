import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, TextField } from '@mui/material';

export default function AddressForm(){
    return (
        <Grid container spacing={3} disableEqualOverflow >
            <Grid xs={12}>
              <Typography variant={'h6'} component={'h6'} >
                Address details
              </Typography>
            </Grid>
            <Grid xs={12} md={3}>
              <TextField required id='street-name' label='Streetname' helperText="Insert a streetname."></TextField>
            </Grid>
            <Grid xs={12} md={3} >
              <TextField required id='street-number' label='Number' inputMode='numeric' helperText="Insert numbers only."></TextField>
            </Grid>
            <Grid xs={12} md={12}>
              <TextField required id='city' label='City' helperText="Insert a city name."></TextField>
            </Grid>
            <Grid xs={12} md={3}>
              <TextField required id='postal-code' label='Postal Code' inputMode='numeric' helperText="Insert a valid postal code."></TextField>
            </Grid>
            <Grid xs={12} md={3}>
              <TextField required id='State' label='State' helperText="Insert a state name."></TextField>
            </Grid>
        </Grid>
    )
}


