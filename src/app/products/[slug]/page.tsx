import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="position-relative ratio ratio-1x1 overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-fit-cover"
              priority
            />
          </div>
        </div>

        <div className="col-lg-6">
          <p className="text-secondary mb-2">
            {product.category}
          </p>

          <h1 className="display-5">
            {product.title}
          </h1>

          <p className="fs-4">
            ${product.price.toFixed(2)}
          </p>

          <p className="lead">
            {product.description}
          </p>

          <button className="btn btn-dark btn-lg mt-3">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}