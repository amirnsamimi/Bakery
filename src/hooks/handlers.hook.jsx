export const onChangeHandler = (e, setterFunction) => {
  setterFunction({ [e.target.name]: e.target.value });
};

export const onClickHandler = (handleFunc, setterFunction) => {
  setterFunction(handleFunc);
};

export const radioHandler = (e, setterFunction) => {
  setterFunction(e.target.value);
};

// count handler button names can be ( plus/minus ) only otherwise it will throw error
export const countHandler = (name, countValue, setterFunction) => {
  if (name === "plus" || name === "minus") {
    switch (name) {
      case "minus":
        if (countValue == 0) {
          setterFunction(0);
        } else {
          setterFunction((prev) => prev - 1);
        }
        break;
      case "plus":
        setterFunction((prev) => prev + 1);
        break;
      default:
        setterFunction(0);
        break;
    }
  } else {
    throw new Error("use Proper names for buttons");
  }
};
