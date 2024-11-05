import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      const pro = state.find((pro) => pro.id === action.payload);

      if (itemExists) {
        if(itemExists.quantity < 10){
        itemExists.quantity++;
        //alert('Added to Cart!')
        }else{
        //alert('This Is Maximum Amount You Can Buy!')
        }
      } else {
        state.push({ ...action.payload, quantity: 1 });
        //alert('Added to Cart!')
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if(item.quantity === 10){
        alert('This Is Maximum Amount You Can Buy!')
      }else{
      item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;