const express = require("express");
const uuid = require("uuid");
const router = express.Router();

const ProductModel = require("../models/Product");
const DUMMY_PRODUCTS = [];

router.get("/products", async (req, res) => {
  console.log("GET /products");
  const products = await ProductModel.find().lean().exec();
  res.status(200).send(products);
});

// router.post("/product", (req, res) => {
//   console.log("POST /product");
//   const { title, price} = req.body;

//   if (!title || title.trim().length === 0 || !prise || price <= 0) {
//     return res.status(422).json({
//       message: "Invalid input, please entrer a valid title and price"
//     });
//   };

//   const createProduct = {
//     id: uuid(),
//     title,
//     price
//   };

//   DUMMY_PRODUCTS.push(createProduct);

//   res
//     .status(201)
//     .json({ message: "Created new product", product: createProduct });
// });

router.post("/products", async (req, res) => {
  console.log('POST products');
  console.log('POST res.body', req.body);
  try {
    const product = await ProductModel.create(req.body);
    res.status(200).json({
      message: "Product a été crée !"
    })
    res.send(product)
  } catch (error) {
    console.log('error create product is: ' + error)
  }
})

module.exports = router;