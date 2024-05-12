import React, { useEffect } from 'react';
import "./home.css";
import drinks from '../drinks.json'
import { Badge, Grid } from '@mui/material';
import DrinkItem from '../items/drinkItem'; 
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../cart';
import { useUIContext } from '../context';


function Home() {
    const { cart, setCart, setShowCart } = useUIContext();

    useEffect(() => {
        const storedValue = localStorage.getItem("cart")
        if(storedValue != null){
            setCart(JSON.parse(storedValue))
        }
    })

    const getTotal = () => {
        let total = 0;
        for (let item of cart) {
            total += parseFloat(item.quantity);
        }
        return total;
    }
    
    return (
        <div>
        <AppBar position="static" sx={{background: '#0a3c81'}}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bar App
            </Typography>
            <IconButton color="inherit" onClick={() => setShowCart(true)}>
                <Badge badgeContent={cart && getTotal()} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Toolbar>
        <Cart />
        </AppBar>
        <Grid container spacing={3}>
            {drinks.drinks.map((drink) => (
                <DrinkItem key={drink.id} drink={drink} />
            ))}
        </Grid>
        </div>
    );
}

export default Home;