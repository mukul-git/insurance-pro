import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataError: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataError } =
  dataSlice.actions;

export default dataSlice.reducer;
