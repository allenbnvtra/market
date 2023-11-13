import mongoose from "mongoose";

const connectMongoDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to database!"))
    .catch((err) =>
      console.log(`Getting an error from DB connection.. ERROR: ${err.message}`)
    );
};

export default connectMongoDB;
