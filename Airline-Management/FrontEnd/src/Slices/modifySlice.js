import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modifyData: localStorage.getItem("modifyData")
    ? JSON.parse(localStorage.getItem("modifyData"))
    : null,
};


const modifySlice = createSlice({
  name: "modify",
  initialState,
  reducers: {
    setModifyData(state, value) {
      state.modifyData = value.payload;
    },
  },
});

export const {setModifyData} = modifySlice.actions;
export default modifySlice.reducer;
