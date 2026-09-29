import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar border-bottom">
      <div className="container py-3">
        <Link className="navbar-brand fw-bold" href="/">
          LaDeeDaa
        </Link>

        <div className="d-flex gap-4 align-items-center">
          <Link className="text-decoration-none text-dark" href="/shop">
            Shop
          </Link>

          <Link className="text-decoration-none text-dark" href="/about">
            About
          </Link>

          <Link className="text-decoration-none text-dark" href="/cart">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}