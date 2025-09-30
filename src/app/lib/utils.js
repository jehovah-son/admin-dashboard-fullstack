import mongoose from "mongoose";

export const ConnectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log("🔍 MONGO_URI:", process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed");
    throw new Error(error);
  }
};
;