import { getTodoFromLocal, setTodoToLocal } from "@/local/local";
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSlice",

  initialState: {
    todos: getTodoFromLocal()
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);

      // save to localStorage
      setTodoToLocal(state.todos);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      // update localStorage
      setTodoToLocal(state.todos);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
  }
});

// export actions
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// export reducer
export default todoSlice.reducer;