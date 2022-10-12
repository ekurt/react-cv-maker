import { configureStore } from "@reduxjs/toolkit";

import formReducer from "./form";

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
