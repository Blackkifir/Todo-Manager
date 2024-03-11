export type IPropsTodosSlice = {
  todos: IPropsTodo[],
  inputValue: string,
  tooLong: boolean,
};

export interface IPropsTodo {
  id: string,
  text: string,
  isChecked: boolean,
}
