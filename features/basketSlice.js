import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsById = (state, id) => state.basket.items.filter((item) => item.id === id);
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => {
    total += item.price;
  }, 0);

export default basketSlice.reducer;
