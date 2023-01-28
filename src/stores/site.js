import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_COLORS = "cv-maker-colors";
const LOCAL_STORAGE_MARGINS = "cv-maker-margins";
const colors = JSON.parse(localStorage.getItem(LOCAL_STORAGE_COLORS));
const margins = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MARGINS));

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
      primary: colors?.primary || "#373740",
      secondary: colors?.secondary || "#E1D8CF",
      title: colors?.title || "#E1D8CF",
      subtitle: colors?.subtitle || "#FFFFFF",
      titles: colors?.titles || "#E1D8CF",
      text1: colors?.text1 || "#43434C",
      text2: colors?.text2 || "#43434C",
    },
    margins: {
      top: margins?.top || 0,
      right: margins?.right || 0,
      bottom: margins?.bottom || 0,
      left: margins?.left || 0,
    },
    isContentEditable: false,
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
    setMargins: (state, action) => {
      state.margins = action.payload;
    },
    setContentEditable: (state, action) => {
      state.isContentEditable = action.payload;
    },
  },
});

export const {
  setLeftSide,
  setRightSide,
  setColors,
  setMargins,
  setContentEditable,
} = siteSlice.actions;

export default siteSlice.reducer;
