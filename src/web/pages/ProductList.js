import React, { useEffect, useState } from "react"
import NewProduct from "./NewProduct";
import {Grid} from "@material-ui/core"

import ProductCard from "./ProductCard";

export default function ProductsList (props) {
  const [products, setProducts] = useState([]);

  // let content;
  // if (!props.items || props.items.length === 0) {
  //   content = <p>Could not find any products. maybe create one?</p>;
  // } else {
  //   content = (
  //     <ul>
  //       {props.items.map(p => (
  //         <ProductCard 
  //           key={p.id}
  //           name={p.name}
  //           price={p.price}
  //         />
  //       ))}
  //     </ul>
  //   )
  // }

  const onAllProduct = () => {
    fetch("http://localhost:3000/api/products")
      .then((res) => {return res.json()})
      .then((result) => {
        console.log('result 3', result[3])
        setProducts(result)
      })
  }

  useEffect(() => {
    onAllProduct()
  }, [])

  return (
    <div>
      <Grid container >
        <NewProduct />
        <Grid style={{marginTop: 20}}>
        {products.map((p, i) => {
          {/* console.log("p >>>", p) */}
          return (
            <ProductCard 
            key={i}
            title={p.title}
            price={p.price}
            createdAt={p.createdAt}
          />
          )
        })}
        </Grid>
      </Grid>
    </div>
  ) 
}