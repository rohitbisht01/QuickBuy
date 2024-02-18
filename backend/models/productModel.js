const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User is required to have a review"],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Review name is required"],
    },
    rating: {
      type: String,
      required: [true, "Review rating is required"],
    },
    comment: {
      type: String,
      required: [true, "Review comment is required"],
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    image: {
      type: String,
      required: [true, "Product image is required"],
    },
    brand: {
      type: String,
      required: [true, "Product Brand is required"],
    },
    category: {
      type: String,
      required: [true, "Product Category is required"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: [true, "Product rating is required"],
      default: 0,
    },
    numReviews: {
      type: Number,
      required: [true, "Product reviews is required"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Product Price is required"],
      default: 0,
    },
    countInStock: {
      type: Number,
      required: [true, "Product stock is required"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
