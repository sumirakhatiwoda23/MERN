import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    }
  }
});

export const { addTodo } = todoSlice.actions;

// ✅ THIS IS REQUIRED
export default todoSlice.reducer;