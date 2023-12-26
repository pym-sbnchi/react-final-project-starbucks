import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function MenuItems() {
  const [categories, setCategories] = useState();
  const [subcategories, setSubcategories] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "categories?populate=*")
      .then((res) => res.json())
      .then((data) => setCategories(data.data));
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "subcategories?populate=*")
      .then((res) => res.json())
      .then((data) => setSubcategories(data.data));
  }, []);
  const subcategoriesItems = subcategories?.map((e, index) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <img
        key={index}
        src={
          process.env.REACT_APP_BASE_URL +
          e?.attributes.image.data.attributes.url
        }
        alt=""
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <Typography key={index} component="p">
        {e?.attributes.title}
      </Typography>
    </Box>
  ));
  return (
    <>
      <Box
        sx={{
          width: "750px",
          display: "grid",
          gridTemplateColumns: { md: "repeat(2, 1fr)", xs: "repeat(1, 1fr)" },
          margin: "auto",
        }}
      >
        {subcategories ? (
          subcategoriesItems
        ) : (
          <Box
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="./Starbucks-Logo.png" className="loader" />
          </Box>
        )}
      </Box>
    </>
  );
}
