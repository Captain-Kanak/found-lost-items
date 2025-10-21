import mongoose from "mongoose";

// Function to connect to MongoDB using mongoose
const connectMongooseDb = async () => {
  try {
    // Check if already connected
    if (mongoose.connection.readyState === 1) {
      return true;
    }

    // Check if MONGODB_URI is defined
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    // return success message
    return { success: true, message: "Connected to MongoDB" };
  } catch (error) {
    // return error message
    return { success: false, message: error.message };
  }
};

// Export the connection function
export default connectMongooseDb;
