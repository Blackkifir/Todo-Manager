import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPropsTodo, IPropsTodosSlice } from './types/IPropsTodosSlice';

const initialState: IPropsTodosSlice = {
  todos: [],
  inputValue: '',
  tooLong: false,
  completedTasks: 0,
  notCompletedTasks: 0,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    setTooLong(state, action: PayloadAction<boolean>) {
      state.tooLong = action.payload;
    },
    setTodos(state, action: PayloadAction<IPropsTodo[]>) {
      state.todos = action.payload;
      state.inputValue = '';
    },
    setDeleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todoList', JSON.stringify(state.todos));
    },
    setCompletedTasks(state, action: PayloadAction<number>) {
      state.completedTasks = action.payload;
    },
    setNotCompletedTasks(state, action: PayloadAction<number>) {
      state.notCompletedTasks = action.payload;
    },
  },
});

export const {
  setInputValue,
  setTodos,
  setTooLong,
  setDeleteTodo,
  setCompletedTasks,
  setNotCompletedTasks,
} = todosSlice.actions;
export default todosSlice.reducer;
