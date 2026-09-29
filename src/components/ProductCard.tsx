import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article>
      <div className="position-relative ratio ratio-1x1 mb-3 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-fit-cover"
        />
      </div>

      <p className="text-secondary small mb-1">
        {product.category}
      </p>

      <h2 className="h5">
        <Link
          href={`/products/${product.slug}`}
          className="text-dark text-decoration-none"
        >
          {product.title}
        </Link>
      </h2>

      <p>
        ${product.price.toFixed(2)}
      </p>
    </article>
  );
}