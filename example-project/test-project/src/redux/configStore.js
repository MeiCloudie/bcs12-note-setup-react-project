import { configureStore } from "@reduxjs/toolkit"
import demoSlice from "./slices/demoSlice"

export const store = configureStore({
  reducer: {
    demoSlice,
  },
})
