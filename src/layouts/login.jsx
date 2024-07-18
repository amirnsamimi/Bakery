import React, { useEffect, useState } from "react";
import { TextNormalInputIcon } from "../styles/inputs.styles";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { DynamicSvg } from "../assets/icons/icons";
import { SubmitButton } from "../styles/buttons.styles";
import {
  emailSanitizer,
  emailValidator,
  passwordValidator,
} from "../hooks/validators.hook";

import { useDispatch, useSelector } from "react-redux";
import { isAuth, login   } from "../redux/slices/auth.slice";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: false, password: false });
  const [visible,setVisible] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const auth = useSelector(isAuth)
  const emailhandler = (e) => {
    const sanitized = emailSanitizer(e.target.value);
    setForm({ ...form, email: sanitized });
    setError({ password:false, email: false });
  };

  const passwordHandler = (e) => {
    setForm({ ...form, password: e.target.value });
    setError({ email:false, password: false });
  };

  const loginLocally = () => {
    const passwordValidated = passwordValidator(form.password);
    const emailValidated = emailValidator(form.email);
  
    if (!emailValidated.isValid) {
      setError({...error, email: true });
    } else if(!passwordValidated.isValid){
      setError({...error,password: true})
    }
    if(Object.values(error).every((value) => value === false)){
      dispatch(login(form))
     }
  };

  if( auth ) {
   return <Navigate to={"/user"} />
  }
  else{
  return (
    <div className="flex justify-center">
      <div className="min-w-[310px] max-w-[550px] bg-white p-8 rounded-xl my-24 border-line border flex justify-center flex-col items-center ">
        <div className="mb-2">
          <div className="w-full flex justify-center">
            <img
              src="/assets/images/bluecake.svg"
              className="w-24"
              alt="bakery-logo"
            />
          </div>
          <h1 className="mt-6 mb-2 font-medium leading-5 text-center text-fontColor">
            ورود
          </h1>
          <p className="w-full max-w-[350px] text-grayFont text-center">
            سلام؛ لطفا موارد زیر را جهت ورود به حساب کاربری تکمیل کنید
          </p>
        </div>
        <div className="w-full flex flex-col">
          <div className="relative w-full my-4 ">
            <TextNormalInputIcon
              className={" w-full h-full"}
              type="email"
              name="email"
              value={form.email}
              onChange={emailhandler}
              placeholder="ایمیل"
            />
            <div className="right-img">
              <DynamicSvg
                className="right-img absolute top-3  right-3"
                name="mail-outline"
                color={`${true ? "lightGray" : "black"}`}
              />
            </div>
          </div>
          <span
            className={` ${
              error.email ? "block" : "hidden"
            } text-error text-xs pb-4`}
          >
            لطفا ایمیل معتبر وارد کنید.
          </span>
          <div className="relative w-full">
            <TextNormalInputIcon
              className={"w-full"}
              type={ visible ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={passwordHandler}
              placeholder="رمز عبور"
            />
            <DynamicSvg
              className="right-img absolute top-3  right-3"
              name="key-outline"
              color="lightGray"
            />
            <button onClick={()=>setVisible(!visible)}>
            <DynamicSvg
              className="absolute top-3  left-3"
              name={visible ? "eye-outline-slash"  : "eye-outline"}
              color="lightGray"
            />
            </button>
          </div>

          <span  className={` ${
              error.password ? "block" : "hidden"
            } text-error text-xs pt-4`}>رمزعبور اشتباه است.</span> 
          <a href="#" className="w-full text-center text-primary  text-xs py-4">
            رمز عبور خود را فراموش کرده اید؟
          </a>
        </div>
        <div className="flex justify-center flex-col items-center">
          <SubmitButton style={{width:"165px", height:"45px"}} onClick={loginLocally}>ورود</SubmitButton>
          <p className="text-fontColor text-xs leading-3 pt-4">
            حساب کاربری ندارید؟{" "}
            <Link href="#" className="text-primary border-primary border-b">
              ایجاد کنید.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
};

export default Login;
