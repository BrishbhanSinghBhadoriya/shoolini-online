import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
  phone: {
    type: String,
    required: [true, "Please provide your phone number"],
  },
  course: {
    type: String,
    required: [true, "Please select a course"],
  },
  state: {
    type: String,
    required: [true, "Please select a state"],
  },
  campaign: {
    type: String,
  },
  university: {
    type: String,
    default: "Shoolini University",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { collection: process.env.MONGODB_COLLECTION || "enquiries" }); // Use collection name from .env.local

export default mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);
