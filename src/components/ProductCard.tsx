import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article>
      <div className="bg-light ratio ratio-1x1 mb-3">
        <div className="d-flex align-items-center justify-content-center">
          Product Image
        </div>
      </div>

      <p className="text-secondary small mb-1">
        {product.category}
      </p>

      <h2 className="h5">
        {product.title}
      </h2>

      <p>
        ${product.price.toFixed(2)}
      </p>
    </article>
  );
}