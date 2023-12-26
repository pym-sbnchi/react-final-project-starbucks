import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductMenu() {
  const {id} = useParams()
  const [subsubcategories, setSubsubcategories]=useState()
  useEffect(()=>{
    fetch(process.env.REACT_APP_BASE_API + `subsubcategories/${id}`)
    .then(res=>res.json())
    .then(data=>setSubsubcategories(data.data))
    .catch(err=>console.log(err))
  },[])
  const subsubcategoriesItems = subsubcategories?.map((e, index) => (
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
    
    </>
  )
}
