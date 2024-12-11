import { useSelector } from 'react-redux';

export const useTodos = () => {
  return useSelector((state) => state.todos);
};
