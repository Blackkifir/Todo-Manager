import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPropsTodosSlice } from './types/IPropsTodosSlice';

const initialState: IPropsTodosSlice = {
  id: 0,
  todos: [],
  inputValue: '',
  isChecked: false,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<string>) {
      if (!state.todos) {
        state.todos = [];
      }
      state.todos.push(action.payload);
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    setDeleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
    setIsChecked(state, action: PayloadAction<boolean>) {
      state.isChecked = action.payload;
    },
  },
});

export const {
  setInputValue,
  setTodos,
  setDeleteTodo,
  setIsChecked,
} = todosSlice.actions;
export default todosSlice.reducer;
