const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User is required"],
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: [true, "Order name is required"] },
        qty: { type: Number, required: [true, "Order quantity is required"] },
        image: { type: String, required: [true, "Order image is required"] },
        price: { type: Number, required: [true, "Order price is required"] },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: [true, "Product is required"],
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: {
        type: String,
        required: [true, "Shipping address is required"],
      },
      city: { type: String, required: [true, "Shipping city is required"] },
      postalCode: { type: String, required: [true, "Postal code is required"] },
      country: { type: String, required: [true, "Country is required"] },
    },
    paymentMethod: {
      type: String,
      required: [true, "Payment method is required"],
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: {
      type: Number,
      required: [true, "Price of the item is required"],
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: [true, "Tax price is required"],
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: [true, "Shipping price is required"],
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: [true, "isPaid field is required"],
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
