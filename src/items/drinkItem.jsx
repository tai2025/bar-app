import React from 'react';
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { styled } from "@mui/system";
import useCart from "../context/useCart"


const ProductImage = styled('img') (({ src } )=> ({
    src: `url(${src})`,
    width: '100%',
    padding: '10px'
}));

const DrinkItem = ({ drink }) => {
    const {addToCart} = useCart();

    const handleAddToCart = () => {
        addToCart(drink);
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ position: 'relative', height: '100%', backgroundColor: '#353539', color: 'white' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {drink.name}
                    </Typography>
                    <ProductImage src={drink.photo}/>
                    <Typography variant="body1" gutterBottom>
                        Ingredients:
                    </Typography>
                    <ul>
                        {drink.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <Typography variant="body1" gutterBottom>
                        Price: ${drink.price}
                    </Typography>
                </CardContent>
                <CardActions style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                    <Button variant="contained" color="primary" 
                        onClick={handleAddToCart} 
                        sx={{background: '#0a3c81'}}>
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default DrinkItem;
