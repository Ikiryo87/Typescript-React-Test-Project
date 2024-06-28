// 
"use client";
import * as React from 'react';
import { Drawer, Box, Typography, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AddressForm from '@/components/AddressForm';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { People } from '../../../models/Person';

export default function PersonForm(props: People){
    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Changed input')
    }

    const handleLastNameChange

    const handleSubmit = () => {
      console.log('Clicked')
    };

    return (
        <Box component={'form'} autoComplete="off" sx={{ 
            display: 'flex' 
            }}>
          <div>
            <Grid container rowSpacing={3} columnSpacing={3} disableEqualOverflow sx={{
                marginBottom: 2
            }} >
                <Grid xs={12} >
                  <Typography variant={'h4'} component={'h4'} align='center'  sx={{
                    color: 'white',
                    backgroundColor: '#0ba36c',
                    padding: 1,
                    marginTop: 2,
                    marginBottom: 2,
                  }}>
                  Add a new person to the database
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography variant={'h6'} component={'h6'} >
                  Personal details
                  </Typography>
                </Grid>
                <Grid xs={3} >
                  <TextField required error={false} label='First name' helperText="Insert a first name." InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }} onChange={handleFirstNameChange}>
                  </TextField>  
                </Grid>
                <Grid xs={3} >
                  <TextField required error={false} type='text' label='Last name' helperText="Insert a last name." InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }}  onChange={handleLastNameChange}>
                    </TextField>
                </Grid>
            </Grid>
            <AddressForm />
            <Button onSubmit={handleSubmit}>Submit</Button>
            </div>
            <Drawer
              sx={{
              width: 100,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
              width: 100,
              boxSizing: 'border-box',
              top: ['48px', '56px', '64px'],
              height: 'auto',
              bottom: 0,
              },
            }}
            variant="permanent"
            anchor="right"
            >
            </Drawer>
        </Box>
    )
};