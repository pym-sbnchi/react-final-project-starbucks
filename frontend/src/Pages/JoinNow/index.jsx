import React from "react";
import {
  Box,
  Button,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function JoinNow() {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "bold",
          marginY: "20px",
        }}
        component="h1"
      >
        Create an account
      </Typography>
      <Paper
        elevation={2}
        sx={{
          padding: { xs: "20px 0", md: "50px 0" },
          margin: { xs: "40px 0", md: "40px auto" },
          width: { xs: "100%", md: "60%" },
        }}
      >
        <FormGroup
          sx={{
            margin: "auto",
            width: { xs: "90%", md: "50%" },
            display: "flex",
            gap: "25px",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}
            component="p"
          >
            Personal Information
          </Typography>
          <TextField label="First name" required />
          <TextField label="Last name" required />
          <Typography
            sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}
            component="p"
          >
            Account Security
          </Typography>
          <TextField
            label="Email address"
            helperText="This will be your username"
            required
          />
          <TextField
            label="Password"
            type="password"
            helperText="Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk."
            required
          />
          <Button
            sx={{ width: "200px", borderRadius: "20px" }}
            variant="contained"
            color="success"
          >
            Create account
          </Button>
        </FormGroup>
      </Paper>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="outlined"
          sx={{ margin: "20px auto", borderRadius: "25px" }}
          color="success"
          href="/login"
        >
          Sign in
        </Button>
      </Box>
    </>
  );
}
