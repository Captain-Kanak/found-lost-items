import getItems from "@/app/actions/items/getItems";
import Container from "./components/Container";

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div>
      {/* page heading */}
      <h1>Find Your Lost Items Through Our Network</h1>

      <div>
        {/* items container */}
        <Container items={items} />
      </div>
    </div>
  );
}
