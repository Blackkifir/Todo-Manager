import type { IPropsTodo } from '../../redux/types/IPropsTodosSlice';

export type IPropsTask = {
  todo: IPropsTodo,
  onChangeChecked: (id: string) => void;
  onClickDeleteTodo: (id: string) => void;
};
