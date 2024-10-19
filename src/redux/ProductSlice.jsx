// import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm: "",
  filteredData: [],
};
const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter((p) =>
        p.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});
export const { setProducts, setSearchTerm } = ProductSlice.actions;
export default ProductSlice.reducer;
