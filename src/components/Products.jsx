import { Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Product from "./Product";
import AddProduct from "./AddProduct";
import axios from "axios"

const Products = () => {
  const [data,setData] = useState([])
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const getData =()=>{
       axios.get(`http://localhost:8080/products`).then((res)=>{
         
         setData([...res.data])
       })
  }
    console.log(data)
  useEffect(()=>{
    getData()
  },[])
  return (
    <Flex  justifyContent={''} flexDirection={"column"}>
      {/*  AddProduct */}
       <AddProduct/>
     
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>{/* List of Products */}
      {data.map((el,index)=>(<Product el={el} key={el.id} />))}
      </Grid>
      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;
