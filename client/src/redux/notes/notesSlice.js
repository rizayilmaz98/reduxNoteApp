import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getNotesAsync = createAsyncThunk(
  "notes/getNotesAsync",
  async () => {
    const res = await axios("http://localhost:5000/notes");
    return res.data;
  }
);
export const setNoteAsync = createAsyncThunk(
  "notes/setNoteAsync",
  async (data) => {
    const res = await axios.post("http://localhost:5000/notes", data);
    return res.data;
  }
);
export const deleteTodoAsync = createAsyncThunk(
  "notes/deleteTodoAsync",
  async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    return id;
  }
);
export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotesAsync.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(setNoteAsync.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(deleteTodoAsync.fulfilled, (state, action) => {
      const id = action.payload;
      const noteIndex = state.items.findIndex((item) => item.id === id);
      state.items.splice(noteIndex, 1);
    });
  },
});
export const selectNotes = (state) => state.notes.items;
export default notesSlice.reducer;
