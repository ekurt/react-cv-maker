import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_APP = "cv-maker-app";
const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP));

export const formSlice = createSlice({
  name: "form",
  initialState: {
    personal: data?.personal || {},
    languages: data?.languages || [],
    hobbies: data?.hobbies || [],
    education: data?.education || [],
    experience: data?.experience || [],
    skills: data?.skills || [],
    projects: data?.projects || [],
    courses: data?.courses || [],
    references: data?.references || [],
    social: data?.social || [],
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
