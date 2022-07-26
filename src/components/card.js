import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const styles = {
    media: {
        maxHeight: '40px',
       paddingTop: '56.25%', // 16:9
       maxWidth: '30px',
       padding: '20px',
    },
    card: {
       position: 'relative',
       height: '400px',
       width: '400px'
    },
    overlay: {
       position: 'absolute',
       top: '20px',
       left: '20px',
       color: 'white',
       textAlign: 'center',
    }
 }

export default function CardItem({title}) {
  return (
    <Card style={styles.card} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         style={styles.media}
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent style={styles.overlay}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}