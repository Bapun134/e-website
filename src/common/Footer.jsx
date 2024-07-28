import React from "react";
import { Link } from "react-router-dom";
import { Typography, IconButton, Divider, Box } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'lightGrey', padding: '1.3rem 0', textAlign: 'center' }}>

      <Box sx={{ marginBottom: '1rem' }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} LA COLLECTION. All rights reserved.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '1rem' }}>
        <Link to="/privacy-policy" style={{ textDecoration: 'none', color: '#000', margin: '0 1rem' }}>
          Privacy Policy
        </Link>
        |
        <Link to="/terms-of-service" style={{ textDecoration: 'none', color: '#000', margin: '0 1rem' }}>
          Terms of Service
        </Link>
      </Box>
      <Box sx={{ marginBottom: '1rem' }}>
        <IconButton color="inherit" component="a" href="https://facebook.com" target="_blank" aria-label="Facebook">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://instagram.com" target="_blank" aria-label="Instagram">
          <Instagram />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://twitter.com" target="_blank" aria-label="Twitter">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
