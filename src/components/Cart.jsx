import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart, delCart } from "../redux/cartSlice";
import { Container, Grid, Typography, Button, Card, CardContent, CardMedia, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
    const data = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(addCart(item));
    };

    const handleDel = (item) => {
        dispatch(delCart(item));
    };

    const calculateTotal = () => {
        return data.reduce((total, product) => total + product.qty * product.price, 0).toFixed(2);
    };

    const emptyCart = () => (
        <Box sx={{ textAlign: 'center', my: 5 }}>
            <Typography variant="h4">Your Cart is Empty</Typography>
        </Box>
    );

    const cartItems = (product) => (
        <Card sx={{ my: 2 }} key={product.id}>
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.title}
                        sx={{ height: 200, width: 'auto', objectFit: 'contain' }}
                    />
                </Grid>
                <Grid item md={8} xs={12}>
                    <CardContent>
                        <Typography variant="h6">{product.title}</Typography>
                        <Typography variant="body1">
                            {product.qty} X ${product.price} = ${product.qty * product.price}
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                            <IconButton color="error" onClick={() => handleDel(product)} sx={{ mr: 1 }}>
                                <RemoveIcon />
                            </IconButton>
                            <Typography variant="body1" sx={{ mx: 2 }}>
                                {product.qty}
                            </Typography>
                            <IconButton color="primary" onClick={() => handleAdd(product)}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );

    const buttons = () => (
        <Box sx={{ textAlign: 'center', my: 4 }}>
            <Link to="/checkout" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" sx={{ width: '25%' }}>
                    Proceed to Checkout
                </Button>
            </Link>
        </Box>
    );

    return (
        <Container>
            {data.length === 0 ? emptyCart() : data.map(cartItems)}
            {data.length !== 0 && (
                <>
                    <Box sx={{ textAlign: 'center', my: 4 }}>
                        <Typography variant="h5">
                            Total Amount: ${calculateTotal()}
                        </Typography>
                    </Box>
                    {buttons()}
                </>
            )}
        </Container>
    );
};

export default Cart;
