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
} = formSlice.actions;

export default formSlice.reducer;
