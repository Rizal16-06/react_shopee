import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Hero (){
  return (
    <div className="hero">
        <div className="c_1 container">
            <div className="hero_left">
                <div id="carouselExampleInterval" class="slide_1 carousel slide" data-bs-ride="carousel">
                    <div class="slide_2 carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="../gambar_1/shopping-mall.jpg" alt="SHOPPING MALL" />
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="../gambar_1/banner-shopee-3.jpg" alt="SHOPEE" />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="../gambar_1/12-12.jpg" alt="PROMO 12.12" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="hero_right">
                <div className="atas">
                    <img src="../gambar_1/shop.jpg" alt="SHOPE MALL" />
                </div>
                <div className="bawah">
                    <img src="../gambar_1/brithday.jpg" alt="SHOPEE BRITHDAY" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;