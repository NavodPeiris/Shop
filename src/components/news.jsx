import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import purchases from './purchases';

export default function MediaCard({product}) {

  const handlepurchase = () =>{
     purchases.push(product);
     console.log('hello');
     console.log(purchases);
  }

    return (

      <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          className='card'
          component="img"
          height="300"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography className='price'>RS.{product.price}</Typography>
          <Button size="Medium" onClick={handlepurchase}>ADD TO CART</Button>
        </CardActions>
      </Card>
      </React.Fragment>
    );
 
}