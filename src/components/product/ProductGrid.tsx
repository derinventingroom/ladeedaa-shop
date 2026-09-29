import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {
  return (
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
  );
}