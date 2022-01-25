import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        category: {
            type: String,
            enum: ["barbershop", "pool", "fastfood", "jewelry"],
        },
        desc: { type: String, required: true },
        image_Bg: [String],
        little_Images: [String],
        phone: { type: String, required: true },
        address: { type: String, required: true },
        region: { type: Number, required: true },
        website: { type: String },
        workingYears: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model("POSTS", PostSchema);
