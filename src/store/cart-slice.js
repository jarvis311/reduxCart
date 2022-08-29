import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.title,
          quantity: 1,
        });
      } else {
        existingItem.quantity++
        existingItem.price = existingItem.totalPrice + newItem.price;
      }
    },
    removeCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--
      state.changed = true
      if (existingItem.id === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else{
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
