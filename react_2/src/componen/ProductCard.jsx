import React, { useState } from 'react';

function ProductCard({ product }){
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="product-image">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <div className="info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Rp {product.price.toLocaleString()}</p>
          </div>
            <div className="tombol">
              <button className="tombol_1">Beli</button>
              <button className="tombol_2"><i class="bi bi-cart-plus"></i></button>
            </div>
        </div>
        {isHovered && (
        <div className="similar-products-button">
          <button>Lihat produk serupa</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
