import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "Init Demo Slice",
  status: true,
}

const demoSlice = createSlice({
  name: "demoSlice",
  initialState,
  reducers: {
    actionFunction: (state, action) => {
      console.log(action)
      state.status = action.payload
    },
  },
})

export const { actionFunction } = demoSlice.actions

export default demoSlice.reducer
