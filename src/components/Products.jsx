import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardMedia, Typography, Container, Grid, CircularProgress, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('default'); // New state for sorting option

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        console.log(products)

        if (componentMounted) {
          setData(products);
          setFilter(products);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    let sortedList = [...filter];
    if (sort === 'priceAsc') {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (sort === 'priceDesc') {
      sortedList.sort((a, b) => b.price - a.price);
    }
    setFilter(sortedList);
  }, [sort]);

  return (
    <Container sx={{ my: 2, py: 5 }} style={{ maxWidth: "95%" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Latest Products
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <Button variant="outlined" color="primary" sx={{ mr: 2 }} onClick={() => setFilter(data)}>All</Button>
        <Button variant="outlined" color="primary" sx={{ mr: 2 }} onClick={() => filterProduct("women's clothing")}>Women 👩</Button>
        <Button variant="outlined" color="primary" sx={{ mr: 2 }} onClick={() => filterProduct("men's clothing")}>Men 👨</Button>
        <Button variant="outlined" color="primary" sx={{ mr: 2 }} onClick={() => filterProduct("jewelery")}>Jewellery 💍</Button>
        <Button variant="outlined" color="primary" sx={{ mr: 2 }} onClick={() => filterProduct("electronics")}>Electronics 💡</Button>
      
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Sort By</InputLabel>
          <Select value={sort} onChange={handleSortChange} label="Sort By">
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="priceAsc">Price: Low to High</MenuItem>
            <MenuItem value="priceDesc">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </div>


      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={5}>
          {filter.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card sx={{ boxShadow: 4 }}>
                <CardMedia component="img" height="200" image={product.image} alt={product.title} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div" noWrap> {product.title} </Typography>
                  <Typography variant="h6" color="text.secondary"> ${product.price} </Typography>
                  <Box display="flex" alignItems="center" mt={1}>
                    <Typography variant="body2" color="text.secondary">Rating: {product.rating.rate} ({product.rating.count} reviews)</Typography>
                  </Box>
                </CardContent>
                <div style={{ padding: '16px' }}>
                  <Button variant="outlined" color="primary" fullWidth component={Link} to={`/products/${product.id}`}> View Product </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Products;
