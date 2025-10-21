import connectMongooseDb from "@/lib/mongoose";
import Item from "@/models/item.model";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    // Get the item id
    const { id } = await params;

    // Connect to MongoDB
    await connectMongooseDb();

    // Find the item by id
    const item = await Item.findById(id);

    // Return the item
    return NextResponse.json(item);
  } catch (error) {
    // Return error
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    // Get the item id
    const { id } = await params;

    // Get the request body
    const itemData = await request.json();

    // Connect to MongoDB
    await connectMongooseDb();

    // Update the item by id
    const item = await Item.findByIdAndUpdate(id, itemData, { new: true });

    // Return the item
    return NextResponse.json(item);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    // Get the item id
    const { id } = await params;

    // Connect to MongoDB
    await connectMongooseDb();

    // Delete the item by id
    const item = await Item.findByIdAndDelete(id);

    // Return the item
    return NextResponse.json(item);
  } catch (error) {
    // Return error
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
