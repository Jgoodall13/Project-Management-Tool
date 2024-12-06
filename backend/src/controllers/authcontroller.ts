import { Request, Response, RequestHandler } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/authUtils";
import {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/authUtils";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser = new User({
      username,
      email,
      passwordHash: hashedPassword,
    });

    await newUser.save();

    // Generate JWT
    const accessToken = generateAccessToken(newUser._id.toString());

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
      accessToken,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await verifyPassword(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const accessToken = generateAccessToken(user._id.toString());
    const refreshToken = generateRefreshToken(user._id.toString());

    // Save refresh token to the user's database collection
    user.refreshTokens.push(refreshToken);
    await user.save();

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username, email: user.email },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server error in login" });
  }
};

export const refreshToken = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token is required" }); // Add return here
  }

  try {
    // Verify the refresh token
    const payload = verifyRefreshToken(refreshToken);

    // Check if the refresh token exists in the database
    const user = await User.findById(payload.id);
    if (!user || !user.refreshTokens.includes(refreshToken)) {
      return res.status(401).json({ message: "Invalid refresh token" }); // Add return here
    }

    // Generate a new access token
    const newAccessToken = generateAccessToken(user._id.toString());

    res.status(200).json({
      accessToken: newAccessToken,
    });
  } catch (error) {
    console.error("Error refreshing token:", error);
    res.status(401).json({ message: "Invalid or expired refresh token" });
  }
};
