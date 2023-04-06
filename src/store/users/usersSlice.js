import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=5");
      return res.data;
    } catch (err) {
      return err.message;
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
  extraReducers: {},
});

export default usersSlice.reducer;
