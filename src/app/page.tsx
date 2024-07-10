import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import MediaCard from '@/components/MediaCard';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <div>
      <Typography variant={'h3'} component={'h3'} align='left' sx={{
          mb: 3,
          color: '#1d8c87'
        }}>
          Hello,
        </Typography>
        <Typography variant={'body1'} component={'p'} align='left' sx={{
          borderBottom: 1,
          borderTop: 1,
          borderColor: 'secondary.main',
          p: 2,
          mb: 3
        }}>
          Welcome to my website. This is a practice project I got assigned @ <Link href="https://visie-groep.nl/" target='_blank'>Visie-Groep</Link>. The website will feature two CRUD applications; a company list and a people list. If you want to view a list of companies please select 'Companies' in the menu to the left. If you want to view a list of people, please select 'People' in the menu to the left.
          <br/>
          <br/>
          The companies page will show you a list of companies that are listed in a MongoDB collection. You can simply look at an overview of the collected companies, search for specific company, add or delete one.
          <br/>
          <br/>
          The people page will also display a list of people that have been registered in a separate MongoDB collection. Just as with company page, you can simply view a list of people, search for specific people or add and delete people in the database. 
          <br/>
          <br/>
          Currently this is work in progress, but I'm hoping to have a complete project in a couple of days of working on the project. So far it has been fun, but challenging to work on this project. I started the assignment after finishing a course on React by Stephen Grider. Before I could actually start woring on the project though I had to learn about Typescript and MongoDB. 
          <br/>
          <br/>
          Whilst trying to work on the project I encountered problems with the localhost not hot reloading, and several other issues that sidetracked my progress. I learned a lot from resolving this issues, but it also cost me quite a lot of time to get things resolved...
          <br/>
          <br/>
          Anyway, here you are and this is the current state of things, so feel free to browse this site at your leisure, any feedback is welcome and much appreciated!
        </Typography>
        <Grid container rowSpacing={3} columnSpacing={3}>
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
          <Grid xs={6}>
            <MediaCard
              heading="RGB"
              text="An RGB color space is any additive color space based on the RGB color model. RGB color spaces are commonly found describing the input signal to display devices such as television screens and computer monitors."
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="CIELAB"
              text="The CIELAB color space, also referred to as L*a*b*, was intended as a perceptually uniform space, where a given numerical change corresponds to a similar perceived change in color."
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
}
