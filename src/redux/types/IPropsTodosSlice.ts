export type IPropsTodosSlice = {
  todos: IPropsTodo[],
  inputValue: string,
  tooLong: boolean,
  completedTasks: number,
  notCompletedTasks: number,
};

export interface IPropsTodo {
  id: string,
  text: string,
  isChecked: boolean,
}
