import ProductBrowser from "@/components/product/ProductBrowser";
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

      <ProductBrowser products={products} />
    </main>
  );
}