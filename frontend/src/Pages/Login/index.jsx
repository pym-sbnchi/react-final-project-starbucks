import {
  Box,
  Button,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import useFormFields from "../../utils/useFormFields";
import axios from "axios";
import { login } from "../../store/Slices/AuthSlice";
export default function Login() {
  const dispatch = useDispatch();
  const [fields, handleChange] = useFormFields();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BASE_API + "auth/local", fields)
      .then((res) => {
        alert("login Successfully");
        dispatch(login({ user: res.data.user, token: res.data.jwt }));
      })
      .catch((err) => alert(err));
  };
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
        Sign in or create an account
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
          onSubmit={handleSubmit}
        >
          <TextField
            label="Username or email address"
            required
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            required
            onChange={handleChange}
          />
          <Button
            sx={{ width: "100px", borderRadius: "20px" }}
            variant="contained"
            color="success"
          >
            Sign in
          </Button>
        </FormGroup>
      </Paper>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="outlined"
          sx={{ margin: "20px auto", borderRadius: "25px" }}
          color="success"
          href="/join"
        >
          Join now
        </Button>
      </Box>
    </>
  );
}
