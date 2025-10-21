import connectMongooseDb from "@/lib/mongoose";
import Item from "@/models/item.model";
import { NextResponse } from "next/server";

// Create a new item
export async function POST(request) {
  try {
    // Get the request body
    const itemData = await request.json();

    const {
      postType,
      itemName,
      description,
      image,
      category,
      location,
      contactInfo,
      status,
    } = itemData;

    // Connect to MongoDB
    await connectMongooseDb();

    // Create a new item
    const newItem = await Item.create({
      postType,
      itemName,
      description,
      image,
      category,
      location,
      contactInfo,
      status,
    });

    // Return the new item
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    // Return error
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Get all items
export async function GET() {
  try {
    // Connect to MongoDB
    await connectMongooseDb();

    // Find all items
    const items = await Item.find();

    // Return all items
    return NextResponse.json(items);
  } catch (error) {
    // Return error
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
