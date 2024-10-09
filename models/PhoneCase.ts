import mongoose from "mongoose";

const PhoneCaseSchema = new mongoose.Schema(
  {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    croppedImageUrl: { type: String },
    color: { type: String },
    model: { type: String },
    material: { type: String },
    finish: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const PhoneCase =
  mongoose.models?.PhoneCase || mongoose.model("PhoneCase", PhoneCaseSchema);
export default PhoneCase;
