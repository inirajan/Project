import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: [true, "Email address is required."],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return emailRegex.test(value);
      },
      message: "Invalid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minLength: [6, "Password length must be greater than 6."],
  },
  roles: {
    type: [String],
    default: ["USER"],
    enums: ["USER", "MERCHANT", "ADMIN"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    minLength: [6, "Invalid phone number"],
    maxLength: [13, "Invalid phone number"],
  },
  address: {
    city: {
      type: String,
      required: [true, "Address city is required"],
    },
    province: {
      type: String,
      required: [true, "Address province is required"],
    },
    country: {
      type: String,
      default: "Nepal",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  profileImageUrl: String,
  isActive: {
    type: Boolean,
    default: true,
  },
});

const User = new mongoose.model("User", userSchema);

export default User;
