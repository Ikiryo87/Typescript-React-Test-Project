import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function GenericCard({ heading, text }: { heading: string; text: string }) {
  return (
    <Card>
      <Image
        alt="Random image"
        src="https://source.unsplash.com/random"
        width={640}
        height={480}
        style={{
          maxWidth: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show more information</Button>
      </CardActions>
    </Card>
  );
}



{/* <ButtonGroup size='large'>
<Button variant='contained' sx={{
  mb: 2,
  mt: 2,
  p: 2,
  backgroundColor: '#ab1886'
}}>Add</Button>
<Button variant='contained' sx={{
  mb: 2,
  mt: 2,
  backgroundColor: '#ab1886'
}}>Delete</Button>
<Button variant='contained' sx={{
  mb: 2,
  mt: 2,
  backgroundColor: '#ab1886'
}}>Update</Button>
</ButtonGroup> */}