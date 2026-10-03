import ProductBrowser from "@/components/product/ProductBrowser";
import { getProducts } from "@/data/products";

export default async function ShopPage() {
  const products = await getProducts();

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