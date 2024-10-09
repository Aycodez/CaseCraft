import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: Number, required: true },
    Order: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
