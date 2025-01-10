import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className ="c_1 container">
            <div className="logo">
                <i class="bi bi-bag-fill"></i>
                <a href="/">Shopee</a>
            </div>
            <div className="pencarian">
                <div className="cari">
                  <input type="search" placeholder="cari produk.." className="cari_1" />
                </div>
                <button><i class="bi bi-search"></i></button>
            </div>
            <div className="icons">
            <i class="bi bi-cart2"></i>
            <i class="bi bi-person-fill"></i>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;