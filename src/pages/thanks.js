import React from "react";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useCart from "../context/useCart"
import {Typography, Box} from "@mui/material";

const centerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    color: 'white',
};

function Thanks() {
    const {removeAll} = useCart();
    return (
        <Box sx={centerStyles}>
            <Typography variant="h2" gutterBottom>
                Thank You!
            </Typography>
            <Button variant="contained" onClick={removeAll} component={Link} to="http://localhost:3000/" color="primary">
                Back to Home
            </Button>
        </Box>
    );
}

export default Thanks;