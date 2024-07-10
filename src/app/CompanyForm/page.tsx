"use client";
import * as React from 'react';
import { useState } from 'react'
import { Drawer, Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AddressForm from '@/components/AddressForm';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CompanyModel, { ICompany } from '../../../models/Person';
import { Types } from "mongoose";

// Create a new document... //
// const doc = new CompanyModel({

// });

// Initial state for use with useState
// const initialCompanyState: ICompany = {

// };

// Defining raw document type
type RawCompanyDocument = ICompany & Document;

// Where does this line go exactly? I think this is used when we want to work with existing data?
// useRawDoc(doc.toObject() as RawPersonDocument);


// This function will work with raw document data!
export default function CreateCompany(doc: RawCompanyDocument){
  const [company, setCompany] = useState<ICompany>(initialCompanyState);

  // const person = new PersonModel()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompany({
      ...company,
      [name]: value
    });
  };

  // This is because address data is nested in the doc
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompany({
      ...company,
      address: {
        ...company.address,
        [name]: value
      }
    });
  };

  const handleSubmit = () =>{

  };

    return (
        <Box component={'form'} sx={{ 
            display: 'flex' 
            }}>
          <div>
            <Grid container spacing={3} disableEqualOverflow sx={{
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
                <Grid xs={3}>
                  <TextField required error={false} label='First name' helperText="Insert a first name." InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }} name='firstName' value={} onChange={handleChange}>
                  </TextField>  
                </Grid>
                <Grid xs={3} >
                  <TextField required error={false} label='Last name' helperText="Insert a last name." InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }} name='lastName' value={} onChange={handleChange}>
                    </TextField>
                </Grid>
            </Grid>
            <AddressForm />
            <Button variant='contained' sx={{
              backgroundColor: '#9cbff7',
              mb: 2,
              mt: 2
              }} onSubmit={handleSubmit}>
            Submit
            </Button>
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