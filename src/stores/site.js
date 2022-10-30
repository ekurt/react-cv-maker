import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
  name: "site",
  initialState: {
    leftSide: [
      { id: 1, component: "PreviewSocial" },
      { id: 2, component: "PreviewLanguage" },
      { id: 3, component: "PreviewHobbies" },
    ],
    rightSide: [
      { id: 1, component: "PreviewEducation" },
      { id: 2, component: "PreviewExperience" },
      { id: 3, component: "PreviewSkills" },
      { id: 4, component: "PreviewProjects" },
      { id: 5, component: "PreviewCourses" },
      { id: 6, component: "PreviewReferences" },
    ],
    colors: {
      primary: "#373740",
      secondary: "#E1D8CF",
      body: "#FFFFFF",
      title: "#E1D8CF",
      subtitle: "#FFFFFF",
      titles: "#E1D8CF",
      text: "#43434C",
    },
  },
  reducers: {
    setLeftSide: (state, action) => {
      state.leftSide = action.payload;
    },
    setRightSide: (state, action) => {
      state.rightSide = action.payload;
    },
    setColors: (state, action) => {
      state.colors = action.payload;
    },
  },
});

export const { setLeftSide, setRightSide, setColors } = siteSlice.actions;

export default siteSlice.reducer;
