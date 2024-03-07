import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  inputValue: '',
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    }
  }
});

export const { setTodos, setInputValue } = todosSlice.actions;
export default todosSlice.reducer;