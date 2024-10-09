import mongoose from "mongoose";

const orderEnum = ["fulfilled", "shipped", "awaiting_shipment"];

const OrderSchema = new mongoose.Schema(
  {
    email: { type: Number, required: true },
    configurationId: { type: String, required: true },
    configuration: { type: mongoose.Schema.Types.ObjectId, ref: "PhoneCase" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    status: { type: String, enum: orderEnum, default: "awaiting_shipment" },
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShippingAddress",
    },
    shippingAddressId: { type: String },
    billingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BillingAddress",
    },
    billingAddressId: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Order = mongoose.models?.Order || mongoose.model("Order", OrderSchema);
export default Order;
