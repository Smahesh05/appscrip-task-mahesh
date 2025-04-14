import { useEffect, useState } from "react";
import "./App.css";
import DiscoverSection from "./components/DiscoverSection/DiscoverSection";
import FilterBar from "./components/FilterBar/FilterBar";
import Footer from "./components/footer/Footer";
import MainHeader from "./components/header/MainHeader";
import ProductList from "./components/ProductList/ProductList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("RECOMMENDED");


  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=10");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    let sorted = [...products];

    switch (option) {
      case "PRICE: HIGH TO LOW":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "PRICE: LOW TO HIGH":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "NEWEST FIRST":
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date)); 
        break;
      case "POPULAR":
        
        sorted.sort((a, b) => b.rating.rate - a.rating.rate); 
        break;
      case "RECOMMENDED":
       
        sorted.sort((a, b) => b.rating.count - a.rating.count);
        break;
      default:
        break;
    }

    setProducts(sorted);
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <div>
        <MainHeader />
        <DiscoverSection />
        <main>
          <FilterBar
            isFilterVisible={isFilterVisible}
            toggleFilterVisibility={toggleFilterVisibility}
            onSortChange={handleSortChange}
          />
          <div className="container">
            <div className="main_wrapper">
              {isFilterVisible && <Sidebar />}
              <ProductList products={products} loading={loading}/>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
