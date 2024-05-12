import { Avatar, Box, Button, Divider, Drawer, Paper, Typography, colors } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import { useUIContext } from "../context";
import useCart from "../context/useCart"


export default function Cart() {
    const {cart, setShowCart, showCart } = useUIContext();
    const {removeFromCart} = useCart();

    const cartContent = cart.map(item => {
        const handleRemove = () => {
            removeFromCart(item)
        }
        return (
        <Box key={item.drink.id}>
            <Box
                display="flex"
                alignItems="start"
                justifyContent={"flex-start"}
            >
                <Avatar src={item.drink.photo} sx={{width: 80, height: 80, mr: 4}} />
                <Box
                    display="flex"
                    flexDirection={"column"}
                    sx={{mr: 4}}
                >
                    <Typography variant="h6">{item.drink.name}</Typography>
                    <Typography variant="subtitle2">{item.drink.ingredients.join(', ')}</Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    sx={{mr: 4}}
                >
                    <Typography variant="body1" justifyContent={"end"}>${item.drink.price}</Typography>
                    <div>
                        <Typography variant="body2" justifyContent={"end"}>QT:{item.quantity}</Typography>
                    </div>
                </Box>
                <DeleteIcon onClick={handleRemove}/>
            </Box>
            <Divider variant="inset" />
        </Box>
    )
});

    const subtotal = () => {
        let total = 0;
        for (let item of cart) {
            total += parseFloat(item.drink.price) * parseFloat(item.quantity);
        }
        return total.toFixed(2);
    }

    const taxes = () => {
        return (subtotal() * 0.0825).toFixed(2)
    }

    const total = () => {
        return (parseFloat(subtotal()) + parseFloat(taxes())).toFixed(2)
    }



    return (
      <Drawer
        open={showCart}
        onClose={() => setShowCart(false)}
        anchor="right"
        PaperProps={{
            sx: {
                width: "40vw",
                background: colors.grey,
                borderRadius: 0
            }
        }}
    >
        <Box
            sx={{ p:2}}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            <Typography variant="h3">Your Cart</Typography>
            <Paper
                elevation={0}
                sx={{mt:2, width: '90%', padding: 4}}
            >
                {cartContent}
            </Paper>
            <Box
                display="flex"
                alignItems="start"
                justifyContent={"space-between"}
            >
                <Typography variant="h6" sx={{mr: 20}}>SubTotal: </Typography>
                <Typography variant="h6" sx={{mr: 5}}>{subtotal()}</Typography>
            </Box>
            <Box
                display="flex"
                alignItems="start"
                justifyContent={"space-between"}
            >
                <Typography variant="h6" sx={{mr: 20}}>Taxes: </Typography>
                <Typography variant="h6" sx={{mr: 3}}>{taxes()}</Typography>
            </Box>
            <Box
                display="flex"
                alignItems="start"
                justifyContent={"space-between"}
            >
                <Typography variant="h6" sx={{mr: 20}}>Total: </Typography>
                <Typography variant="h6" sx={{mr: 0}}>{total()}</Typography>
            </Box>
            
            <Button sx={{mt:4}} variant="contained">Proceed To Payment</Button>
        </Box>
    </Drawer>  
    );
}