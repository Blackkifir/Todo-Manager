export type IPropsTaskInput = {
  inputValue: string,
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  onClickSubmit: () => void;
};
