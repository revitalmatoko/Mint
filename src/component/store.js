import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Store = () => {
  const [search, setSearch] = useState("");
  const [arrayProduct, setProducts] = useState()
  // getProduct = async () => {
  //   try {
  //     const products = await arrayProduct(search);
  //     products.map(singleProduct => {
  //       return{
        
  //       id: singleProduct.id,
  //       name: singleProduct.name,
  //       imageUrl:singleProduct.imageUrl,
  //       isFavorite: singleProduct.isFavorite,
  //       moreInfoFloorName: singleProduct.moreInfo.floorName,
  //        moreInfoWebsiteUrl: singleProduct.websiteUrl
  //       }
  //     }
  //   } 
  //   catch{}
  // };
  return (
    <div>
    <Navbar>
        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
     
    </div>
  );
};
export default Store;