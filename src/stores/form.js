import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    personal: {},
    languages: [],
  },
  reducers: {
    setPersonal: (state, action) => {
      state.personal = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
  },
});

export const { setPersonal, setLanguages } = formSlice.actions;

export default formSlice.reducer;
