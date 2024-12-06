import mongoose from "mongoose";
import User from "./models/User";

const testUserCreation = async () => {
  try {
    // Connect to the database
    await mongoose.connect(
      "mongodb+srv://jraygoodall:ovcWIaJvMBakPrtT@cluster0.l7gui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Connected to MongoDB");

    // Create a new user
    const user = new User({
      username: "testuser",
      email: "testuser@example.com",
      passwordHash: "hashedpassword", // Replace with hashed password in real usage
    });

    await user.save();
    console.log("User created:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await mongoose.disconnect();
  }
};

testUserCreation();
