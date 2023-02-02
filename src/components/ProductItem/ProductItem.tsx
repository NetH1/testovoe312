import { productsType } from "@/types/ProductsTypes";
import Image from "next/image";
import { FC } from "react";
import styles from "./ProductItem.module.scss";

interface ProductItemProps {
  product: productsType;
  addToCart?: (product: productsType) => void;
  addToWishlist?: (product: productsType) => void;
}

const ProductItem: FC<ProductItemProps> = ({
  product,
  addToWishlist,
  addToCart
}) => {
  return (
    <li className={styles.card}>
      <div className={styles.label_hit}>
        {product.rating.count > 300 ? <label>Хит</label> : ""}
      </div>
      <div className={styles.div_image}>
        <Image
          src={product.image}
          alt="productImage"
          width={220}
          height={220}
        />
      </div>
      <div className={styles.main_div_content}>
        <div className={styles.div_category}>
          <p>{product.category}</p>
        </div>
        <div className={styles.div_title}>
          <span>{product.title}</span>
        </div>

        <div className={styles.div_bottom}>
          <div className={styles.div_price}>
            <p className={styles.p_price}>{`${Math.floor(
              product.price * 70
            )} ₽ /шт.`}</p>
            <div className={styles.div_buy}>
              <button
                className={styles.div_button_cart}
                onClick={() => addToCart?.(product)}
              >
                в корзину
              </button>
              <button
                className={styles.div_button_wish}
                onClick={() => addToWishlist?.(product)}
              >
                &#10084;
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
