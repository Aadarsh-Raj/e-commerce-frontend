import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    buyerSellerTag: "Buyer",
    isLoginFormActive: true,
    user:"",
    token:localStorage.getItem("user"),
    apiUrl:"http://localhost:4000/api"
  },
  reducers: {
    setBuyerSellerTag: (state, action) => {
      state.buyerSellerTag = action.payload;
    },
    setIsLoginFormActive: (state, action) => {
      state.isLoginFormActive = action.payload;
    },
    setUser: (state, action)=>{
      state.user = action.payload
    },
    setToken:(state, action)=>{
      state.token = action.payload;
    }
  },
});

export const { setBuyerSellerTag, setIsLoginFormActive } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
export default counterReducer;
