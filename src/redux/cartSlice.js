import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }
    },
    delCart: (state, action) => {
      const product = action.payload;
      const exist = state.find((x) => x.id === product.id);
      
      if (exist.qty === 1) {
        return state.filter((x) => x.id !== exist.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    },
  },
});

export const { addCart, delCart } = cartSlice.actions;
export default cartSlice.reducer;
