import React, { useState } from "react";
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';


function ProductList () {
    const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'Tas sekolah',
      price: 100000,
      image: '../gambar_1/tas.jpg',
    },
    {
      id: 2,
      name: 'Parfum aromatic',
      price: 150000,
      image: '../gambar_1/parfum.jpg',
    },
    {
      id: 3,
      name: 'Pulpen',
      price: 200000,
      image: '../gambar_1/pulpen.jpg',
    },
    {
        id: 4,
        name: 'Gelang emas',
        price: 200000,
        image: '../gambar_1/gelang.jpg',
    },
    {
        id: 5,
        name: 'Sepatu sekolah',
        price: 200000,
        image: '../gambar_1/sepatu.jpg',
    },
    {
        id: 6,
        name: 'Kacamata hitam',
        price: 200000,
        image: '../gambar_1/kacamata.jpg',
    },
    {
        id: 7,
        name: 'Jam tangan',
        price: 200000,
        image: '../gambar_1/jam_tangan.jpg',
    },
    {
        id: 8,
        name: 'Pancing 1 set',
        price: 200000,
        image: '../gambar_1/pancing.jpg',
    },
    {
        id: 9,
        name: 'Baju daster',
        price: 200000,
        image: '../gambar_1/daster.jpg',
    },
    {
        id: 10,
        name: 'Earphone bluetooth',
        price: 200000,
        image: '../gambar_1/tws.jpg',
    },
    {
        id: 11,
        name: 'Tas wanita',
        price: 200000,
        image: '../gambar_1/tas_wanita.jpg',
    },
    {
        id: 12,
        name: 'Baju rajut wanita',
        price: 200000,
        image: '../gambar_1/rajut.jpg',
    },
    {
        id: 13,
        name: 'Sandal Antarestar',
        price: 200000,
        image: '../gambar_1/sandal.png',
    },
    {
        id: 14,
        name: 'Kalung emas',
        price: 200000,
        image: '../gambar_1/kalung.jpg',
    },
    {
        id: 15,
        name: 'Kabel Data 120w',
        price: 200000,
        image: '../gambar_1/kabel_data.jpg',
    },
    {
        id: 16,
        name: 'Skincare',
        price: 200000,
        image: '../gambar_1/skincare.jpg',
    },
    {
        id: 17,
        name: 'Cupper',
        price: 200000,
        image: '../gambar_1/cupper.jpg',
    },
    {
        id: 18,
        name: 'Fan Cooller',
        price: 200000,
        image: '../gambar_1/cooler.jpg',
    },
    {
        id: 19,
        name: 'Case hp Tecno pova 6 pro',
        price: 200000,
        image: '../gambar_1/case.jpg',
    },
    {
        id: 20,
        name: 'Handphone',
        price: 200000,
        image: '../gambar_1/hp.jpg',
    },
    {
        id: 21,
        name: 'Baju kaos',
        price: 200000,
        image: '../gambar_1/baju.jpg',
    },
  ];

  
  const [visibleCount, setVisibleCount] = useState(14); 
  const isAllVisible = visibleCount >= products.length;

  const handleShowMore = () => {
    setVisibleCount(products.length);
  };

  const handleShowLess = () => {
    setVisibleCount(14);
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };


//   const handleCardClick = (productId) => {
//     navigate(`/product/${productId}`); 
//   };

return (
    <div className="product-list">
        <div class="container">
            <div className="rekomendasi">
                REKOMENDASI
            </div>
            <div className="produk">
                    {products.slice(0, visibleCount).map((product) => (
                    <ProductCard key={product.id} product={product} onCardClick={handleCardClick} />
                ))}
            </div>
            <div className="button-container">
                {!isAllVisible ? (
                <button className="show-more-button" onClick={handleShowMore}>
                    <i class="bi bi-chevron-double-down"></i>
                </button>
                ) : (
                <button className="show-more-button" onClick={handleShowLess}>
                    <i class="bi bi-chevron-double-up"></i>
                </button>
                )}
            </div>
        </div>  
    </div>
    );
};

export default ProductList;
