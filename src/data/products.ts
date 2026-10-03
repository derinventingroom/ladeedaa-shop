import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    title: "Midnight Garden",
    slug: "midnight-garden",
    price: 29,
    category: "T-Shirts",
    image: "/images/cinnamon-bun.jpg",
    description: "An original graphic design inspired by nature after dark.",
  },
  {
    id: "2",
    title: "Abstract Forms",
    slug: "abstract-forms",
    price: 25,
    category: "Prints",
    image: "/images/cresant.jpg",
    description: "A bold abstract print exploring shape, balance, and negative space.",
  },
  {
    id: "3",
    title: "After Hours",
    slug: "after-hours",
    price: 32,
    category: "T-Shirts",
    image: "/images/eclair.jpg",
    description: "An original apparel design inspired by late nights and city lights.",
  },
  {
    id: "4",
    title: "Midnight Munchies",
    slug: "midnight-minchies",
    price: 35,
    category: "Prints",
    image: "/images/strawberry-tart.jpg",
    description: "An original apparel design inspired by late nights and city lights.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
export async function getProducts() {
  return products;
}