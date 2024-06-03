import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    buyerSellerTag: "Admin",
  },
  reducers: {
    setBuyerSellerTag: (state, action) => {
      state.buyerSellerTag = action.payload;
    },
  },
});

export const { setBuyerSellerTag } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
export default counterReducer;
