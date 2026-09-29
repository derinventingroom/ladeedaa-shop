import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <main className="container py-5">
      <header className="mb-5">
        <h1 className="display-4">Shop</h1>
        <p className="lead">
          Original artwork, prints, and apparel.
        </p>
      </header>

      <ProductGrid products={products} />
    </main>
  );
}