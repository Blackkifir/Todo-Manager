import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPropsTodosSlice } from './IPropsTodosSlice';

const initialState: IPropsTodosSlice = {
  inputValue: '',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = todosSlice.actions;
export default todosSlice.reducer;
