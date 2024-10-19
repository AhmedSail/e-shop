import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockData } from "../assets/mockData";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/ProductSlice";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { addToCart } from "../redux/CartSlice";
import { Alert, Slide } from "@mui/material";
import GoTop from "../components/GoTop";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null); // مبدئيًا product يكون null
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide alert after 3 seconds
  };

  const handleClick = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart({ ...product, quantity: parseInt(quantity) })); // إضافة الكمية مع المنتج
    handleShowAlert();
  };

  useEffect(() => {
    dispatch(setProducts(mockData));
    const newProduct = products.find((p) => p.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products, dispatch]);

  return (
    <div>
      {product ? ( // تحقق من أن product موجود قبل محاولة الوصول إلى خصائصه
        <div className="container mx-auto py-8 px-4 md:px-16 lg:px:24 mt-8">
          <div className="flex flex-col md:flex-row gap-x-16">
            {/* product image  */}
            <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
              <img
                src={product.image}
                alt="product"
                className="w-full object-contain"
              />
            </div>
            {/* product info  */}
            <div className="md:w-1/2 py-4 shadow-md md:p-16 flex flex-col items-center gap-y-2 max-sm:mt-10">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-xl font-semibold mb-4 text-gray-800">
                ${product.price}
              </p>
              <div className="flex item-center mb-4 gap-x-2">
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity} // ربط القيمة بالحالة
                  onChange={(e) => setQuantity(e.target.value)} // تحديث القيمة
                  className="border p-1 w-16"
                />
                <button
                  className="bg-red-600 text-white hover:bg-red-800 transition-all duration-300 py-1.5 px-4"
                  onClick={(e) => handleClick(e, product)}
                >
                  Add to Cart
                </button>
                <Slide
                  direction="left"
                  in={showAlert}
                  mountOnEnter
                  unmountOnExit
                >
                  <Alert
                    severity="success"
                    className="fixed top-4 right-4 z-50" // Fixed positioning for the alert
                  >
                    Product added to cart successfully!
                  </Alert>
                </Slide>
              </div>
              <div className="flex flex-col gap-y-4 mt-4">
                <p className="flex items-center">
                  <FaCarSide className="mr-1" />
                  Delivery & Return
                </p>
                <p className="flex items-center">
                  <FaQuestion className="mr-1" />
                  Ask a Question
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Product Description</h3>
            <p>Product description with goes here.</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div> // عرض رسالة تحميل في حال لم يتم تعيين المنتج بعد
      )}
      <GoTop />
    </div>
  );
}

export default ProductDetail;
