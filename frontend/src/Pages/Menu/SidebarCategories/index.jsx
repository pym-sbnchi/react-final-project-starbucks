import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

export default function SidebarCategories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "categories?populate=*")
      .then((res) => res.json())
      .then((data) => setCategories(data.data));
  }, []);

  const categoriesItems = categories?.map((e, index) => (
    <li key={index}>
      <Typography
        component="p"
        style={{ textDecoration: "none" }}
        color="black"
        fontWeight="bold"
      >
        {e?.attributes.title}
      </Typography>
      {e?.attributes.subcategories.data?.map((x, index) => {
        return (
          <li key={index}>
            <Typography
              href={`/subsubcategories/${x?.id}`}
              component="a"
              style={{ textDecoration: "none", paddingTop: "10px" }}
              color="GrayText"
            >
              {x?.attributes.title}
            </Typography>
          </li>
        );
      })}
    </li>
  ));
  return (
    <>
      <Box sx={{display:{xs:'none' , md:'flex'}}}>
        <ul style={{ listStyleType: "none", width: "100%" }}>
          {categoriesItems}
        </ul>
      </Box>
    </>
  );
}
