import React from 'react';


function ProductCard({ product ,onCardClick }){

  return (
      <div className="product-card"
      onClick={() => onCardClick(product.id)}
          >
          <div className="product-image">
              <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <div className="info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">Rp {product.price.toLocaleString()}</p>
            </div>
          </div>
      </div>
  );
};

export default ProductCard;
