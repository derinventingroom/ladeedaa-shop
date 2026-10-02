"use client";

import { useState } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import type { Product } from "@/types/product";

type ProductBrowserProps = {
  products: Product[];
};

export default function ProductBrowser({
  products,
}: ProductBrowserProps) {
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts];

  if (sortBy === "price-low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "name") {
    sortedProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <div>
      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <label
            htmlFor="product-search"
            className="form-label"
          >
            Search products
          </label>

          <input
            id="product-search"
            type="search"
            className="form-control"
            placeholder="Search by product name..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="product-sort"
            className="form-label"
          >
            Sort by
          </label>

          <select
            id="product-sort"
            className="form-select"
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value)
            }
          >
            <option value="default">Default</option>
            <option value="price-low">
              Price: Low to High
            </option>
            <option value="price-high">
              Price: High to Low
            </option>
            <option value="name">Name: A–Z</option>
          </select>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-2 mb-4">
        <button
          type="button"
          className={
            selectedCategory === "All"
              ? "btn btn-dark"
              : "btn btn-outline-dark"
          }
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        <button
          type="button"
          className={
            selectedCategory === "Prints"
              ? "btn btn-dark"
              : "btn btn-outline-dark"
          }
          onClick={() => setSelectedCategory("Prints")}
        >
          Prints
        </button>

        <button
          type="button"
          className={
            selectedCategory === "T-Shirts"
              ? "btn btn-dark"
              : "btn btn-outline-dark"
          }
          onClick={() => setSelectedCategory("T-Shirts")}
        >
          T-Shirts
        </button>
      </div>

      <p className="text-secondary mb-4">
        {filteredProducts.length}{" "}
        {filteredProducts.length === 1
          ? "product"
          : "products"}
      </p>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={sortedProducts} />
      ) : (
        <div className="border rounded p-5 text-center">
          <h2 className="h4">No products found</h2>
          <p className="text-secondary mb-0">
            Try another search or category.
          </p>
        </div>
      )}
    </div>
  );
}