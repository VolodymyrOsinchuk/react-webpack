import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  TextField,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 10
  }
}));

export default function NewProduct() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  function titleChange(event) {
    setTitle(event.target.value);
  };

  function priceChange(event) {
    setPrice(event.target.value);
  };

  const onAddProduct = () => {
    fetch("http://localhost:3000/api/products")
      .then((res) => {return res.json()})
      .then((result) => {
        console.log('result', result)
      })
  }

  function submitProduct(event) {
    event.preventDefault();
    onAddProduct();
  }

  return (
    <>
    <section className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h2 style={{textAlign: "center"}}>Add a New Product</h2>
            <form onSubmit={submitProduct}>
              <TextField 
                label="Title"
                variant="outlined"
                margin="normal"
                fullWidth
                value={title}
                onChange={titleChange}
              />
               <TextField 
                label="Price"
                variant="outlined"
                margin="normal"
                fullWidth
                value={price}
                onChange={priceChange}
              />
              <Button 
                type="submit"
                variant="contained" 
                color="primary">
                ADD PRODUCT
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </section>

    </>
  )
}

