import React from "react";
function Footer(){
  return (
    <footer className="footer">
        <div class="container">
            <div className="footer_conten">
                <div className="footer-section">
                    <h4>Layanan Pelanggan</h4>
                    <ul>
                        <li><a href="/help">Pusat Bantuan</a></li>
                        <li><a href="/payment">Cara Pembayaran</a></li>
                        <li><a href="/returns">Pengembalian Barang</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Tentang Shopee</h4>
                    <ul>
                        <li><a href="/about">Tentang Kami</a></li>
                        <li><a href="/careers">Karir</a></li>
                        <li><a href="/terms">Syarat & Ketentuan</a></li>
                        <li><a href="/privacy">Kebijakan Privasi</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Ikuti Kami</h4>
                    <ul>
                        <li><i class="bi bi-facebook"></i> <a href="https://facebook.com">Facebook</a></li>
                        <li><i class="bi bi-instagram"></i> <a href="https://instagram.com">Instagram</a></li>
                        <li><i class="bi bi-twitter"></i> <a href="https://twitter.com">Twitter</a></li>
                        <li><i class="bi bi-youtube"></i> <a href="https://youtube.com">YouTube</a></li>
                        <li><i class="bi bi-linkedin"></i> <a href="https://linkedin.com">Linkedin</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Metode Pembayaran</h4>
                    <div className="payment-icons">
                        <img src="./gambar_1/visa2.png" alt="Visa" />
                        <img src="./gambar_1/master_card.png" alt="Mastercard" />
                        <img src="./gambar_1/bni.png" alt="BNI" />
                        <img src="./gambar_1/bri.png" alt="BRI" />
                        <img src="./gambar_1/shopee_pay.png" alt="Shopee pay" />
                        <img src="./gambar_1/alfamart.png" alt="Alfamart" />
                        <img src="./gambar_1/seabank.png" alt="SeaBank" />
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Download Aplikasi Shopee</h4>
                    <div className="foot-apk">
                        <img src="./gambar_1/barcode.png" alt="barcode" />
                        <div className="logo-apk">
                            <a href="https://shopee.co.id/web"><img src="./gambar_1/googleplay.png" alt="play store" /></a>
                            <a href="https://shopee.co.id/web"><img src="./gambar_1/appstore.png" alt="app store" /></a>
                            <a href="https://shopee.co.id/web"><img src="./gambar_1/app_gallery.png" alt="app gallery" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Shopee. Semua Hak Dilindungi.</p>
            </div>
      </div>
      
    </footer>
  );
};

export default Footer;
