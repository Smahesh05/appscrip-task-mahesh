import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { image, title, isOutOfStock } = product;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        {isOutOfStock && (
          <div className={styles.outOfStockOverlay}>
            <span>OUT OF STOCK</span>
          </div>
        )}
      </div>
      <div className={styles.title}>
        {title.length > 20 ? `${title.slice(0, 20)}...` : title}
      </div>
      <div className={styles.productDescriptionWrapper}>
        <p className={styles.cardDescription}>
          <span style={{ textDecoration: "underline" }}>Sign in</span> or Create
          an account to see pricing
        </p>
        <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
          {isFavorite ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
