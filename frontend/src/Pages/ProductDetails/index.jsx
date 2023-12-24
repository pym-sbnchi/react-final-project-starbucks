import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = uDeState();
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + `products/${id}?populate=*`)
      .then(res.json())
      .then((data) => setData(data.data));
  }, [id]);
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#273833",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{width:'250px'}}>
          <img
            src={
              process.env.REACT_APP_BASE_URL +
              data?.attributes?.productImage?.data?.attributes?.url
            }
            style={{width:'100%'}}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: { xs: "center", md: "start" } }}
        >
          <Typography component="h3">{data?.attributes?.title}</Typography>
          <Typography component="p">{data?.attributes?.calories}</Typography>
        </Box>
      </Stack>
      <Button
        variant="contained"
        color="success"
        sx={{ borderRadius: "50%" }}
        onClick={() => dispatch(addItems(data))}
      >
        Add to Order
      </Button>
    </>
  );
}
