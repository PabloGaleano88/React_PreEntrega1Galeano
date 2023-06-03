import * as React from 'react';
import './Cards.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = (props) => {
    return (
        <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 400}}
                component="img"
                src={props.image}
                title="Productos"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{props.price}</Button>
            </CardActions>
        </Card>
                </div>
    );
}

export default MediaCard