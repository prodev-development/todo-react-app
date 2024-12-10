export const addTodo = (data) => ({
  url: `${process.env.REACT_APP_API_URL}/todos`,
  method: "POST",
  data,
});
