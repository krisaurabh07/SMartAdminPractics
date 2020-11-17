import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Button,
} from "@material-ui/core";
import logo from "../media/logo.png";

class login extends Component {
  render() {
    return (
      <Container maxWidth="xs">
        <Box
          textAlign="Center"
          bgcolor="white"
          boxShadow="2"
          borderRadius="12"
          p="24px"
          mt="50px"
        >
          <img src={logo} height="60px" />
          <Typography variant="h5" color="TextSecondary">
            ADMIN
          </Typography>
          <TextField
            label="Email"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="Password"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
          />
          <br />
          <br />
          <CircularProgress size={24} thickness="4" color="secondary" />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disableElevation
          >
            LOGIN
          </Button>
        </Box>
      </Container>
    );
  }
}

export default login;
