import ProductCard from "@/components/ProductCard";
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

      <div className="row g-4">
        {products.map((product) => (
          <div
            className="col-12 col-md-6 col-lg-4"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}