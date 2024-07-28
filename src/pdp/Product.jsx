import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartSlice";
import { useParams } from "react-router";
import { Container, Grid, Typography, Button, Card, CardContent, CardMedia, CircularProgress, Box } from "@mui/material";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <CardMedia component="img" image={product.image} alt={product.title} sx={{ height: 400, width: '100%', objectFit: 'contain' }} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="textSecondary" gutterBottom> {product.category} </Typography>
                <Typography variant="h4" component="h1" gutterBottom> {product.title} </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom> Rating {product.rating?.rate} </Typography>
                <Typography variant="h5" component="h2" gutterBottom> ${product.price} </Typography>
                <Typography variant="body2" color="textSecondary" paragraph> {product.description} </Typography>
                <Button  variant="contained"  color="primary"  onClick={() => addProduct(product)}  sx={{ mt: 2 }} >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Product;
