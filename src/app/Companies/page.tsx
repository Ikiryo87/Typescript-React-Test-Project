import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import MediaCard from '../../components/MediaCard';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CompanyList(){
    return (
        <Box sx={{ display: 'flex' }}>
            <div>
            <Typography variant={'h4'} component={'h4'} align='center' sx={{
                color: 'white',
                backgroundColor: '#0ba36c',
                padding: 1,
                marginTop: 2,
                marginBottom: 2
            }}>
                Company List
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={3} disableEqualOverflow>
                <Grid xs={6} alignItems={'center'}>
                  <Paper elevation={2} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography variant='h6' component={'div'} >Company Browser</Typography>
                    <TextField id='outlined-basic' label='Company name' placeholder='Please insert a name' sx={{
                        width: '50%',
                        mb: 2,
                        mt: 2
                    }}/>
                    <Button variant='contained' sx={{
                        mb: 2,
                        backgroundColor: '#ab1886'
                    }}>Search</Button>
                  </Paper>
                </Grid>
                <Grid xs={6}>
                  <Paper elevation={2}  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center'
                    }}>
                    <Typography variant='h6' component={'div'}>Company Collection</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                      <Button variant='contained' sx={{
                        backgroundColor: '#ab1886',
                        mb: 2,
                        mt: 2
                      }}>Show list of companies</Button>                    
                      <Button variant='contained' sx={{
                        backgroundColor: '#ab1886',
                        mb: 2
                      }}>Add a new company</Button>
                    </Box>
                  </Paper>
                </Grid>
                <Grid xs={6}>
                <MediaCard
                    heading="CMYK"
                    text="The CMYK color model (also known as process color, or four color) is a subtractive color model, based on the CMY color model, used in color printing, and is also used to describe the printing process itself."
                />
                </Grid>
                <Grid xs={6}>
                <MediaCard
                    heading="HSL and HSV"
                    text="HSL (for hue, saturation, lightness) and HSV (for hue, saturation, value; also known as HSB, for hue, saturation, brightness) are alternative representations of the RGB color model, designed in the 1970s by computer graphics researchers."
                />
                </Grid>
            </Grid>
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
    );   
};
