import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_LOCAL);
    console.log(`MongoDb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: $(error.message)`);
    process.exit(1);
  }
};
