import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("Missing Url");

  if (isConnected) {
    return console.log("MongoDB is already Connected.");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });

    isConnected = true;

    console.log("MongoDb Connected");
  } catch (error) {
    console.log("Error : " + error);
  }
};
