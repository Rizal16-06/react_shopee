import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import "./Shopee.css";
import Navbar from "./components/Navbar";
import Layanan from "./components/Layanan";
import Kategori from "./components/Kategori";
import ProdukList from "./components/ProdukList";
import Footer from "./components/Footer";
import DetailProduk from "./components/DetailProduk";


function App () {
  return (
    <>
      <Navbar />
      <Hero />
      <Layanan />
      <Kategori />
          {/* <ProdukList /> */}
      <Router>
        <Routes>
          <Route path="/" element={<ProdukList />} />
          <Route path="/product/:id" element={<DetailProduk />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;