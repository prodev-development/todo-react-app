import { createSlice } from '@reduxjs/toolkit';
import { addTodo, changeTodo, fetchAllTodos, removeTodo } from '../actions/todo';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchAllTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })

      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })

      .addCase(changeTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo._id === action.payload._id,
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(changeTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })

      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
