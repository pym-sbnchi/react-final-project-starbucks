import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "slides?populate=*")
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);
  const items = data?.map((e, index) => (
    <Stack
      className="slides"
      key={index}
      direction="row"
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
    >
      <Stack sx={{ width: { xs: "100%", md: "50%" } }}>
        <img
          style={{ width: "auto" }}
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data?.attributes?.url
          }
          alt={e?.attributes.title}
        />
      </Stack>
      <Stack
        spacing={13}
        sx={{ px: "45px" }}
        textAlign="center"
        justifyContent="center"
      >
        <Typography
          variant="h2"
          component="h2"
          style={{ fontFamily: "Roboto", fontWeight: "500" }}
        >
          {e?.attributes.title}
        </Typography>
        <Typography
          variant="p"
          component="p"
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "3rem",
          }}
        >
          {e?.attributes.descriptions}
        </Typography>
        <Box sx={{}}>
          <Button
            sx={{ width: "25%", borderRadius: "20px" }}
            variant="outlined"
            color="inherit"
          >
            {e?.attributes.button}
          </Button>
        </Box>
      </Stack>
    </Stack>
  ));
  return (
    <>
      <Stack spacing={4}>
        {data ? (
          items
        ) : (
          <Box
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="./Starbucks-Logo.png" className="loader" />
          </Box>
        )}
      </Stack>
    </>
  );
}
