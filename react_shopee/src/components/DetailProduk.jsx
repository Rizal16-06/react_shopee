import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailProduk = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Tas sekolah',
      price: 100000,
      image: '../gambar_1/tas.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
      id: 2,
      name: 'Parfum aromatic',
      price: 150000,
      image: '../gambar_1/parfum.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
      id: 3,
      name: 'Pulpen',
      price: 200000,
      image: '../gambar_1/pulpen.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 4,
        name: 'Gelang emas',
        price: 200000,
        image: '../gambar_1/gelang.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 5,
        name: 'Sepatu sekolah',
        price: 200000,
        image: '../gambar_1/sepatu.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 6,
        name: 'Kacamata hitam',
        price: 200000,
        image: '../gambar_1/kacamata.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 7,
        name: 'Jam tangan',
        price: 200000,
        image: '../gambar_1/jam_tangan.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 8,
        name: 'Pancing 1 set',
        price: 200000,
        image: '../gambar_1/pancing.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 9,
        name: 'Baju daster',
        price: 200000,
        image: '../gambar_1/daster.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 10,
        name: 'Earphone bluetooth',
        price: 200000,
        image: '../gambar_1/tws.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 11,
        name: 'Tas wanita',
        price: 200000,
        image: '../gambar_1/tas_wanita.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 12,
        name: 'Baju rajut wanita',
        price: 200000,
        image: '../gambar_1/rajut.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 13,
        name: 'Sandal Antarestar',
        price: 200000,
        image: '../gambar_1/sandal.png',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 14,
        name: 'Kalung emas',
        price: 200000,
        image: '../gambar_1/kalung.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 15,
        name: 'Kabel Data 120w',
        price: 200000,
        image: '../gambar_1/kabel_data.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 16,
        name: 'Skincare',
        price: 200000,
        image: '../gambar_1/skincare.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 17,
        name: 'Cupper',
        price: 200000,
        image: '../gambar_1/cupper.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 18,
        name: 'Fan Cooller',
        price: 200000,
        image: '../gambar_1/cooler.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 19,
        name: 'Case hp Tecno pova 6 pro',
        price: 200000,
        image: '../gambar_1/case.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 20,
        name: 'Handphone',
        price: 200000,
        image: '../gambar_1/hp.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
    {
        id: 21,
        name: 'Baju kaos',
        price: 200000,
        image: '../gambar_1/baju.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, corporis?',
    },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2>Produk tidak ditemukan</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="detail-image" />
      <h2>{product.name}</h2>
      <p className="detail-price">Rp {product.price.toLocaleString()}</p>
      <h4>DESKRIPSI</h4>
      <p className="detail-description">{product.description}</p>
      <div className="tombol">
        <button className="tombol_1">Beli</button>
        <button className="tombol_2"><i class="bi bi-cart-plus"></i>Tambah ke keranjang</button>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>
        &larr; Kembali ke daftar produk
      </button>
    </div>
  );
};

export default DetailProduk;
