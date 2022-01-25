import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "u must provide a name"] },
        isAdmin: { type: Boolean, default: false },
        image: String,
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Users", userSchema);
