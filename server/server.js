import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import routerProduct from "./router/productRouter.js";

dotenv.config();
connectDB();
const port = process.env.PORT || 5000;
const app = express();

const __dirname = path.resolve();
app.use(express.json()); //allows the use of JSON data in req,body

app.use("/api/products", routerProduct);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
