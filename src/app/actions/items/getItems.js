"use server";

// Function to get all items
export default async function getItems() {
  try {
    // Fetch all items
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/items`
    );

    // always return an array
    if (!res.ok) {
      return [];
    }

    // If response is ok, parse and return the data
    const items = await res.json();
    return items;
  } catch (error) {
    // Return empty array
    console.log(error);
    return [];
  }
}
