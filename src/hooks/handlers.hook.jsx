export const onChangeHandler = (e, setterFunction) => {
  setterFunction({ [e.target.name]: e.target.value });
};

export const onClickHandler = (handleFunc, setterFunction) => {
  setterFunction(handleFunc);
};

export const radioHandler = (e, setterFunction) => {
  setterFunction(e.target.value);
};
