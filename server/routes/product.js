const express = require("express");
const router = express.Router();

const ProductModel = require("../models/Product");

// ✅ GET all products
router.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find().sort({ createdAt: -1 });
    console.log("🚀 ~ products :", products);
    res.status(200).json(products);
  } catch (error) {
    console.error("❌ GET /api/products error:", error.message);
    res.status(500).json({
      message: "Error fetching products",
      error: error.message,
    });
  }
});

// ✅ GET single product
router.get("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching product",
      error: error.message,
    });
  }
});

// ✅ CREATE product
router.post("/", async (req, res) => {
  try {
    const { title, price } = req.body;

    if (!title || !price) {
      return res.status(400).json({
        message: "Title and price are required",
      });
    }

    const product = await ProductModel.create({
      title,
      price,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
});

// ✅ UPDATE product
router.put("/:id", async (req, res) => {
  try {
    const updated = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({
      message: "Error updating product",
      error: error.message,
    });
  }
});

// ✅ DELETE product
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await ProductModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting product",
      error: error.message,
    });
  }
});

module.exports = router;
