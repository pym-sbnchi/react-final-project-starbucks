import React, { useEffect } from "react";
import SidebarCategories from "./SidebarCategories";
import { useState } from "react";
import MenuItems from "./MenuItems";
import { Box } from "@mui/material";

export default function Menu() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          px: "50px",
          gap: "20px",
        }}
      >
        <SidebarCategories />
        <MenuItems />
      </Box>
    </>
  );
}
