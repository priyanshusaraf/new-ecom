import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import Banner from "./Banner";
import Product from "./Product";
import { toast } from "react-toastify";
import "./Home.css";
// import { productsAtom } from "./atoms"
// import {useRecoilState} from "recoil"

function Home() {
  //const [mainProducts, setMainProducts] = useRecoilState(productsAtom);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/products");
      setProducts(res.data.products);
      console.log(res.data);
    } catch (err) {
      console.error("Error", err);
      toast.error("Error while fetching products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <Banner />
      <div className="home__productsContainer">
        {products.map((product) => (
          <Product
            title={product.name}
            description={product.description}
            image={product.image}
            price={`${product.price}$`}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
