import { Alert, Slide } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import img from "../assets/Images/products/3e01667b4c12daee9ea2a1cfabe58e2d.jpg";
import GoTop from "../components/GoTop";

function FilterData() {
  const filterProducts = useSelector((state) => state.product.filteredData);
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide alert after 3 seconds
  };

  return (
    <div>
      {filterProducts.length > 0 ? (
        <>
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
            <h2 className="text-3xl font-bold mb-10 text-center">Results</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 mx-auto">
              {filterProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  index={index}
                  handleShowAlert={handleShowAlert} // Pass alert handler to ProductCard
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center mt-10">
          <img src={img} alt="" className="mx-auto" data-aos="zoom-in" />
        </div>
      )}
      <GoTop />
    </div>
  );
}

export default FilterData;
