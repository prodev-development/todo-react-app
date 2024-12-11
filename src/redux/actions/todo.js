import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllTodos = createAsyncThunk(
  'asdf/fetchAllTodos',
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/todos`);
    return response.data;
  },
);

export const addTodo = createAsyncThunk('todos/addTodo', async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/todos`,
    data,
  );
  return response.data;
});

export const changeTodo = createAsyncThunk('todos/changeTodo', async (data) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_URL}/todos/${data._id}`,
    data,
  );
  return response.data;
});

export const removeTodo = createAsyncThunk('todos/removeTodo', async (data) => {
  await axios.delete(
    `${process.env.REACT_APP_API_URL}/todos/${data._id}`,
    data,
  );
  return data._id;
});
