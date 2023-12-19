import React, { useEffect, useState } from 'react'

export default function SidebarCategories() {
  const [data,setData]=useState()
  useEffect(()=>{
    fetch()
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  return (
    <div>Categories</div>
  )
}
