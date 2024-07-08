import * as React     from 'react';
import Card           from '@mui/material/Card';
import CardContent    from '@mui/material/CardContent';
import CardMedia      from '@mui/material/CardMedia';
import Typography     from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid           from '@mui/material/Grid';

export default function Item({ product }) {
    return (
        <Grid item xs={ 3 } md={ 3 }>
            <Card sx={ { maxWidth: 345 } }>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ product.image }
                        alt={ product.description }
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            { product.name }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            { product.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
