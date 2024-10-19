import React, { useEffect, useState } from "react";
import { Categories, mockData } from "../assets/mockData";
import ImgPer from "../assets/Images/125283d86889dd86444e6846e7f74a6e-removebg-preview__1_-removebg-preview.png";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Slider from "react-slick";
import { Alert, Slide } from "@mui/material"; // Import Alert and Slide for animation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shop from "../pages/Shop";
import GoTop from "../components/GoTop";

function Home() {
  const [showAlert, setShowAlert] = useState(false);

  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  // Function to show the alert
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="bg-white mt-2 md:px-16 lg:px-24">
      {/* Global Alert for Add to Cart */}
      <Slide direction="left" in={showAlert} mountOnEnter unmountOnExit>
        <Alert severity="success" className="fixed top-4 right-4 z-50">
          Product added to cart successfully!
        </Alert>
      </Slide>

      {/* القسم الأول: قائمة الفئات */}
      <div className="container mx-auto py-4 flex max-xl:flex-col xl:flex-row xl:space-x-2">
        <div className="w-full xl:w-3/12 mt-3 max-xl:w-full">
          <div className="uppercase bg-red-600 text-white text-xs px-2 py-2.5">
            Shop By Categories
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center font-bold">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* القسم الثاني: الترحيب وزر الشراء */}
        <div className="bg-orange-300 w-full relative mt-3 flex xl:flex-row max-xl:flex-col max-xl:pb-60 xl:pb-3">
          <img
            src={ImgPer}
            alt="Person Shopping"
            className="h-full max-xl:justify-start"
            data-aos="zoom-in"
          />
          <div className="mt-4 absolute text-center xl:right-16 px-4 max-xl:bottom-3 xl:top-16">
            <p
              data-aos="fade-down"
              className="text-gray-600 mb-4 uppercase text-sm text-start"
            >
              Code With Ahmed
            </p>
            <h2
              data-aos="zoom-in"
              data-aos-delay="200"
              className="uppercase text-3xl md:text-4xl font-bold text-start max-sm:text-2xl"
            >
              Welcome To E-Shop
            </h2>
            <p
              data-aos="zoom-out"
              data-aos-delay="400"
              className="uppercase text-xl md:text-2xl font-bold text-start mt-2.5 text-gray-800"
            >
              millions + products
            </p>
            <button
              data-aos="fade-up"
              className="block bg-red-600 px-8 py-1.5 rounded-md text-white mt-4 hover:scale-105 hover:bg-red-700"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* الأقسام: معلومات و فئات المنتجات */}
      <InfoSection />
      <CategorySection />

      {/* قسم عرض المنتجات - Top Products */}
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Top Products</h2>
        <div className="slider-container px-4">
          <Slider {...settings}>
            {products.slice(0, 5).map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                index={index}
                handleShowAlert={handleShowAlert} // Pass alert handler to ProductCard
              />
            ))}
          </Slider>
        </div>
      </div>

      <Shop />

      {/* مكون GoTop لإظهار زر الرجوع للأعلى */}
      <GoTop />
    </div>
  );
}

export default Home;
