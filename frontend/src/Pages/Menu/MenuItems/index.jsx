import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function MenuItems() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "subcategories?populate=*")
      .then((res) => res.json())
      .then((menu) => setMenu(menu.data));
  }, []);
  const menuItems = menu?.map((e, index) => (
    <li
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        margin: "25px",
      }}
      key={index}
    >
      <img
        style={{ width: "100px", borderRadius: "50%" }}
        src={
          process.env.REACT_APP_BASE_URL +
          e?.attributes.image.data.attributes.url
        }
        alt=""
      />
      <p>{e?.attributes.title}</p>
    </li>
  ));
  return (
    <>
      <Box>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gap: "10px 20px",
          }}
        >
          {menu ? (
            menuItems
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
        </ul>
      </Box>
    </>
  );
}
