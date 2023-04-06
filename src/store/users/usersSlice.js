import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async (thunkAPI) => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=5");
      const { results } = res.data;
      return results;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
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
        users: action.payload,
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
