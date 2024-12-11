export const fetchAllTodos = () => ({
  url: `${process.env.REACT_APP_API_URL}/todos`,
  method: "GET",
});

export const addTodo = (data) => ({
  url: `${process.env.REACT_APP_API_URL}/todos`,
  method: "POST",
  data,
});

export const changeTodo = (data) => ({
  url: `${process.env.REACT_APP_API_URL}/todos/${data._id}`,
  method: "PUT",
  data,
});

export const removeTodo = (data) => ({
  url: `${process.env.REACT_APP_API_URL}/todos/${data._id}`,
  method: "DELETE",
});
