import React, { useState } from "react";
import ProductCard from './ProductCard';
// import './ProductList.css';

function ProductList () {
  const products = [
    {
      id: 1,
      name: 'Tas sekolah',
      price: 100000,
      image: './gambar_1/tas.jpg',
    },
    {
      id: 2,
      name: 'Parfum aromatic',
      price: 150000,
      image: './gambar_1/parfum.jpg',
    },
    {
      id: 3,
      name: 'Pulpen',
      price: 200000,
      image: './gambar_1/pulpen.jpg',
    },
    {
        id: 4,
        name: 'Gelang emas',
        price: 200000,
        image: './gambar_1/gelang.jpg',
    },
    {
        id: 5,
        name: 'Sepatu sekolah',
        price: 200000,
        image: './gambar_1/sepatu.jpg',
    },
    {
        id: 6,
        name: 'Kacamata hitam',
        price: 200000,
        image: './gambar_1/kacamata.jpg',
    },
    {
        id: 7,
        name: 'Jam tangan',
        price: 200000,
        image: './gambar_1/jam_tangan.jpg',
    },
    {
        id: 8,
        name: 'Pancing 1 set',
        price: 200000,
        image: './gambar_1/pancing.jpg',
    },
    {
        id: 9,
        name: 'Baju daster',
        price: 200000,
        image: './gambar_1/daster.jpg',
    },
    {
        id: 10,
        name: 'Earphone bluetooth',
        price: 200000,
        image: './gambar_1/tws.jpg',
    },
    {
        id: 11,
        name: 'Tas wanita',
        price: 200000,
        image: './gambar_1/tas_wanita.jpg',
    },
    {
        id: 12,
        name: 'Baju rajut wanita',
        price: 200000,
        image: './gambar_1/rajut.jpg',
    },
    {
        id: 13,
        name: 'Sandal Antarestar',
        price: 200000,
        image: './gambar_1/sandal.png',
    },
    {
        id: 14,
        name: 'Kalung emas',
        price: 200000,
        image: './gambar_1/kalung.jpg',
    },
    {
        id: 15,
        name: 'Kabel Data 120w',
        price: 200000,
        image: './gambar_1/kabel_data.jpg',
    },
    {
        id: 16,
        name: 'Skincare',
        price: 200000,
        image: './gambar_1/skincare.jpg',
    },
    {
        id: 17,
        name: 'Cupper',
        price: 200000,
        image: './gambar_1/cupper.jpg',
    },
    {
        id: 18,
        name: 'Fan Cooller',
        price: 200000,
        image: './gambar_1/cooler.jpg',
    },
    {
        id: 19,
        name: 'Case hp Tecno pova 6 pro',
        price: 200000,
        image: './gambar_1/case.jpg',
    },
    {
        id: 20,
        name: 'Handphone',
        price: 200000,
        image: './gambar_1/hp.jpg',
    },
    {
        id: 21,
        name: 'Baju kaos',
        price: 200000,
        image: './gambar_1/baju.jpg',
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

  return (
    <div className="product-list">
        <div class="container">
            <div className="rekomendasi">
                REKOMENDASI
            </div>
            <div className="produk">
                    {products.slice(0, visibleCount).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
              <div className="button-container">
                {!isAllVisible ? (
                <button className="show-more-button" onClick={handleShowMore}>
                    <p>Tampilkan Lebih Banyak</p>
                    <i class="bi bi-chevron-double-down"></i>
                </button>
                ) : (
                <button className="show-more-button" onClick={handleShowLess}>
                    
                    <i class="bi bi-chevron-double-up"></i>
                    <p>Tampilkan Lebih Sedikit</p>
                </button>
                )}
              </div>
        </div>  
    </div>
  );
};

export default ProductList;



// import React, { useState } from "react";

// const ProductList = () => {
//   // Data produk (dummy)
//   const products = [
//     { name: "Produk 1", price: 100000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 2", price: 200000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 3", price: 300000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 4", price: 400000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 5", price: 500000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 6", price: 600000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 7", price: 700000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 8", price: 800000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 9", price: 900000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 10", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 11", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 12", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 13", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 14", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 15", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 16", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 17", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 18", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 19", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 20", price: 1000000, image: "./gambar_1/case.jpg" },
//     { name: "Produk 21", price: 1000000, image: "./gambar_1/case.jpg" },

//   ];

//   const [visibleCount, setVisibleCount] = useState(14); // Tampilkan 8 produk awal
//   const isAllVisible = visibleCount >= products.length;

//   const handleShowMore = () => {
//     setVisibleCount(products.length); // Tampilkan semua produk
//   };

//   const handleShowLess = () => {
//     setVisibleCount(14); // Reset ke 8 produk
//   };

//   return (
//     <div className="product-list">
//         <div className="container">
//             <h1>Daftar Produk</h1>
//             {/* Daftar produk */}
//             <div className="product-grid">
//                 {products.slice(0, visibleCount).map((product, index) => (
//                 <div className="product-item" key={index}>
//                     <img src={product.image} alt={product.name} className="product-image" />
//                     <h3 className="product-name">{product.name}</h3>
//                     <p className="product-price">Rp {product.price.toLocaleString()}</p>
//                 </div>
//                 ))}
//             </div>

//             {/* Tombol Tampilkan Lebih Banyak/Sedikit */}
//             <div className="button-container">
//                 {!isAllVisible ? (
//                 <button className="show-more-button" onClick={handleShowMore}>
//                     Tampilkan Lebih Banyak
//                 </button>
//                 ) : (
//                 <button className="show-more-button" onClick={handleShowLess}>
//                     Tampilkan Lebih Sedikit
//                 </button>
//                 )}
//             </div>
//         </div>
//     </div>
//   );
// };

// export default ProductList;
