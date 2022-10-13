import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    personal: {},
  },
  reducers: {
    setPersonal: (state, action) => {
      state.personal = action.payload;
    },
  },
});

export const { setPersonal } = formSlice.actions;

export default formSlice.reducer;
