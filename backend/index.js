const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const productRouter = require("./routes/productRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

connectDB();

app.use(cors());

app.use("/api/products", productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
