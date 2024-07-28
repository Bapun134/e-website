import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon, Login as LoginIcon, PersonAdd as PersonAddIcon } from "@mui/icons-material";

const Navbar = () => {
  const data = useSelector((state) => state.cart);

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            LA COLLECTION
          </Link>
        </Typography>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button color="inherit" component={Link} to="/"> Home </Button>
          <Button color="inherit" component={Link} to="/products" sx={{ mr: 4 }}> Products </Button>
          {/* <Button color="inherit" component={Link} to="/about"> About </Button>
          <Button color="inherit" component={Link} to="/contact"> Contact </Button> */}
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/login" startIcon={<LoginIcon />}> Login </Button>
          <Button color="inherit" component={Link} to="/register" startIcon={<PersonAddIcon />}> Register </Button>
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={data.length} color="secondary"> <ShoppingCartIcon /> </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
