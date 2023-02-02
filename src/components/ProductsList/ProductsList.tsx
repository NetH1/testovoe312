import React, { FC, useState, useEffect } from "react";
import { productsType } from "../../types/ProductsTypes";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductsList.module.scss";

type productsTypeProps = {
  products: productsType[];
  cart?: string;
  wishlist?: string;
  fallbackValue?: any;
};

const ProductsList: FC<productsTypeProps> = ({ products }) => {
  let cart: any = [];
  let wishlist: any = [];
  try {
    cart =
      typeof window !== undefined
        ? JSON.parse(localStorage.getItem("cart") || "[]")
        : [];
    wishlist =
      typeof window !== undefined
        ? JSON.parse(localStorage.getItem("wishlist") || "[]")
        : [];
  } catch (e) {
    console.error("localStorage is not available:", e);
  }

  const [cartState, setCart] = useState<productsType[]>(cart);
  const [wishlistState, setWishlist] = useState<productsType[]>(wishlist);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
    localStorage.setItem("wishlist", JSON.stringify(wishlistState));
  }, [cartState, wishlistState]);

  const addToCart = (product: productsType) => {
    setCart([...cartState, product]);
  };

  const addToWishlist = (product: productsType) => {
    setWishlist([...wishlistState, product]);
  };

  return (
    <ul className={styles.cardsflex}>
      {products &&
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}
    </ul>
  );
};

export default ProductsList;
