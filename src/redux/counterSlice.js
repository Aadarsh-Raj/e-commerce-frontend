import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    buyerSellerTag: "Buyer",
    isLoginFormActive: true
  },
  reducers: {
    setBuyerSellerTag: (state, action) => {
      state.buyerSellerTag = action.payload;
    },
    setIsLoginFormActive: (state, action) => {
      state.isLoginFormActive = action.payload;
    },

  },
});

export const { setBuyerSellerTag, setIsLoginFormActive } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
export default counterReducer;
