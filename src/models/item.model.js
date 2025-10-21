import mongoose from "mongoose";

// Define the contact info schema
const contactInfoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

// Define the item schema
const itemSchema = new mongoose.Schema(
  {
    postType: {
      type: String,
      required: true,
      enum: ["Lost", "Found"],
    },
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contactInfo: {
      type: contactInfoSchema,
      required: true,
    },
    status: {
      type: String,
      enum: ["not-recovered", "recovered"],
      default: "not-recovered",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

if (mongoose.models.Item) {
  delete mongoose.models.Item;
}

// Create the item model
const Item = mongoose.model("Item", itemSchema);

// Export the item model
export default Item;
