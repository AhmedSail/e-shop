import React, { useEffect, useState } from "react";
import { mockData } from "../assets/mockData";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Alert, Slide } from "@mui/material"; // Import Alert and Slide for animation
import GoTop from "../components/GoTop";

function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  // Function to show the alert
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide alert after 3 seconds
  };

  return (
    <div>
      {/* Global Alert for Add to Cart */}
      <Slide direction="left" in={showAlert} mountOnEnter unmountOnExit>
        <Alert
          severity="success"
          className="fixed top-4 right-4 z-50" // Fixed positioning for the alert
        >
          Product added to cart successfully!
        </Alert>
      </Slide>

      <div className="container mt-10">
        <h2 className="text-3xl font-bold mb-10 text-center">Shop</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 ">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              handleShowAlert={handleShowAlert} // Pass alert handler to ProductCard
            />
          ))}
        </div>
      </div>
      <GoTop />
    </div>
  );
}

export default Shop;
