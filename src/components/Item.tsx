import * as React     from 'react';
import Card           from '@mui/material/Card';
import CardContent    from '@mui/material/CardContent';
import CardMedia      from '@mui/material/CardMedia';
import Typography     from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid           from '@mui/material/Grid';
import { Product }    from '../redux/productsSlice';

interface ItemProps {
    product: Product;
}

const Item: React.FC<ItemProps> = ({ product }) => {
    return (
        <Grid item xs={ 4 } md={ 4 }>
            <Card raised sx={ { maxWidth: 345, maxHeight: 260, minHeight: 260 } }>
                <CardActionArea sx={ { maxWidth: 345, maxHeight: 260, minHeight: 260, bgcolor: '#f0f0f0' } } >
                    <CardMedia
                        component="img"
                        height="140"
                        image={ product.imageURL }
                        alt={ product.productTitle }
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            { product.productTitle }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            { product.productType }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Item;
