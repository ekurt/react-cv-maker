import { configureStore } from "@reduxjs/toolkit";

import formReducer from "./form";
import siteReducer from "./site";

export default configureStore({
  reducer: {
    form: formReducer,
    site: siteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
