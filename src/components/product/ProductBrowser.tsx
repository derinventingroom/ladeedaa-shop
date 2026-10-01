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

    const filteredProducts =
        selectedCategory === "All"
        ? products
        : products.filter(
            (product) =>
            product.category === selectedCategory
        );

  return (
    <div>
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

      <ProductGrid products={filteredProducts} />
    </div>
  );
}