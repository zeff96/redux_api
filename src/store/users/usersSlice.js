import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=5");
      return res.data;
    } catch (err) {
      throw rejectWithValue(err.message);
    }
  }
);

const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getUsersAsync.fulfilled, (state, action) => ({
        ...state,
        users: action.payload.results,
        isLoading: false,
      }))
      .addCase(getUsersAsync.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default usersSlice.reducer;
