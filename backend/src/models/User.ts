import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Schema.Types.ObjectId; // Explicitly add this
  username: string;
  email: string;
  passwordHash: string;
  roles: string[];
  refreshTokens: string[]; // Store user's refresh tokens
  createdAt: Date;
}

const UserSchema: Schema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    minlength: [3, "Username must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "Invalid email format",
    },
  },
  passwordHash: {
    type: String,
    required: [true, "Password is required"],
  },
  roles: {
    type: [String],
    default: ["user"],
  },
  refreshTokens: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the User model
export default mongoose.model<IUser>("User", UserSchema);
