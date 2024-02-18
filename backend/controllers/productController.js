const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/productModel");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// @desc    Fetch a single product
// @route   GET /api/products/:id
// @access  Public
const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);
  if (!product) {
    res.status(404);
    throw new Error("Resource not found");
  }
  res.status(200).json(product);
});

module.exports = { getProducts, getSingleProduct };
