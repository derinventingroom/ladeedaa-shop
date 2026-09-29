import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  return (
    <main>
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="row py-5">
            <div className="col-lg-8">
              <p className="text-uppercase small fw-semibold mb-3">
                Independent Art & Design
              </p>

              <h1 className="display-2 fw-bold mb-4">
                Original art made to live beyond the screen.
              </h1>

              <p className="lead mb-4">
                Original designs available as art prints and apparel.
              </p>

              <Link
                href="/shop"
                className="btn btn-dark btn-lg"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 border-top">
        <div className="container py-lg-4">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <p className="text-uppercase small fw-semibold mb-2">
                Featured
              </p>

              <h2 className="display-6 mb-0">
                Selected Work
              </h2>
            </div>

            <Link
              href="/shop"
              className="text-dark"
            >
              View All
            </Link>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container py-lg-5">
          <div className="mb-5">
            <p className="text-uppercase small fw-semibold mb-2">
              Explore
            </p>

            <h2 className="display-6">
              Shop by Category
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="bg-white p-5 h-100">
                <p className="text-secondary">
                  Artwork for your walls
                </p>

                <h3 className="display-6">
                  Prints
                </h3>

                <Link
                  href="/shop"
                  className="btn btn-outline-dark mt-3"
                >
                  Shop Prints
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-dark text-white p-5 h-100">
                <p className="text-white-50">
                  Artwork you can wear
                </p>

                <h3 className="display-6">
                  Apparel
                </h3>

                <Link
                  href="/shop"
                  className="btn btn-outline-light mt-3"
                >
                  Shop Apparel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="text-uppercase small fw-semibold mb-3">
                Behind the Work
              </p>

              <h2 className="display-5 mb-4">
                Designed by an artist, not an algorithm.
              </h2>

              <p className="lead text-secondary">
                Every piece begins as an original idea and is
                developed into artwork made for your walls,
                wardrobe, and everyday life.
              </p>

              <Link
                href="/about"
                className="btn btn-outline-dark mt-3"
              >
                About the Artist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}