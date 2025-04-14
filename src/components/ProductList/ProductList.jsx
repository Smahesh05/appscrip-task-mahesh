import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const ProductList = ({products, loading}) => {
  return (
    <section className={styles.wrapper}>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className={styles.grid}>
          {products?.map((product, index) => (
            <ProductCard
              key={product.id}
              product={{
                title: product.title,
                slug: product.id,
                image: product.image,
                isOutOfStock: index % 4 === 0,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
