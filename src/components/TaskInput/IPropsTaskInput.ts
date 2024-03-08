export type IPropsTaskInput = {
  inputValue: string,
  isTooLong: boolean,
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  onClickSubmit: () => void;
};
