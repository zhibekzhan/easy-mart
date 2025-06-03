import React from "react";

const ProductList = () => {
  const { data: products = [], isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
