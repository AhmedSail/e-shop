import React, { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
// const [quantity, setQuantity] = useState(1);
const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const CartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      const quantityToAdd = newItem.quantity ? newItem.quantity : 1; // استخدم الكمية المرسلة أو 1 كقيمة افتراضية

      if (itemIndex) {
        // إذا كان العنصر موجودًا بالفعل، قم بتحديث الكمية والسعر الإجمالي للعنصر
        itemIndex.quantity += quantityToAdd;
        itemIndex.totalPrice += newItem.price * quantityToAdd;
      } else {
        // إذا لم يكن العنصر موجودًا، قم بإضافته مع الكمية المحددة
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: quantityToAdd, // اضف الكمية هنا
          totalPrice: newItem.price * quantityToAdd, // احسب السعر الإجمالي بناءً على الكمية
          image: newItem.image,
        });
      }
      // تحديث السعر الإجمالي والكمية الإجمالية
      state.totalPrice += newItem.price * quantityToAdd; // احسب السعر بناءً على الكمية
      state.totalQuantity += quantityToAdd;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem.quantity > 1) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalQuantity--;
        state.totalPrice -= findItem.price;
      }
    },
  },
});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
