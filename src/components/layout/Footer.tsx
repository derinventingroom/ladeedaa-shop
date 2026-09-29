import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-top py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <p className="fw-bold mb-2">
              YOUR BRAND
            </p>

            <p className="text-secondary mb-0">
              Original art, prints, and apparel.
            </p>
          </div>

          <div className="col-md-6">
            <div className="d-flex gap-4 justify-content-md-end">
              <Link
                href="/shop"
                className="text-dark text-decoration-none"
              >
                Shop
              </Link>

              <Link
                href="/about"
                className="text-dark text-decoration-none"
              >
                About
              </Link>

              <Link
                href="/cart"
                className="text-dark text-decoration-none"
              >
                Cart
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <p className="small text-secondary mb-0">
          © 2026 YOUR BRAND. All rights reserved.
        </p>
      </div>
    </footer>
  );
}