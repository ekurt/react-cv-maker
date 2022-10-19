import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    personal: {},
    languages: [],
    hobbies: [],
    education: [],
    experience: [],
    skills: [],
    projects: [],
    courses: [],
    references: [],
    social: [],
  },
  reducers: {
    setPersonal: (state, action) => {
      state.personal = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    setHobbies: (state, action) => {
      state.hobbies = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setReferences: (state, action) => {
      state.references = action.payload;
    },
    setSocial: (state, action) => {
      state.social = action.payload;
    },
  },
});

export const {
  setPersonal,
  setLanguages,
  setHobbies,
  setEducation,
  setExperience,
  setSkills,
  setProjects,
  setCourses,
  setReferences,
  setSocial,
} = formSlice.actions;

export default formSlice.reducer;
