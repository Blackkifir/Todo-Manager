export type IPropsTask = {
  id: number,
  todo: string,
  onClickDelete: (id: number) => void;
};
