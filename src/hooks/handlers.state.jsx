export const onChangeHandler = (e, setterFunction) => {
  setterFunction({ [e.target.name]: e.target.value });
};

export const onClickHandler = (handleFunc, setterFunction) => {
  setterFunction(handleFunc);
};
