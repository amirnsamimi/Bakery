export const emailValidator = (email) => {
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
return {status: pattern.test(String(email).toLowerCase()), data: String(email).toLowerCase()};
}

export const emailSanitizer = (email) => {
const sanitizedEmail = email.replace(/[<>]g/,"");
return sanitizedEmail

}


export const passwordSanitizer = (password = "") => {

    const errorHanlder = [];
    const isValid =  errorHanlder.length > 0 ? false : true
    const errors = {
        minL: `رمز عبور میبایست 8 کارکتر یا بیشتر باشد`,
        maxL: `رمز عبور میبایست کمتر از 128 کارکتر باشد`,
        upper: `رمز عبور مبیایست حداقل یک حرف بزرگ داشته باشد`,
        lower: `رمز عبور مبیایست حداقل یک حرف کوچک داشته باشد`,
        special: `رمز عبور مبیایست حداقل یک کارکتر [@!#$%] خاص داشته باشد`,
        number: `رمز عبور مبیایست حداقل یک عدد داشته باشد`
    }
  

    const minLength = 8;
    const maxLength = 128;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[!@#$%^&*(),.?"":{}|<>]/;
    const passL = password.length


    if( passL < minLength ){
        errorHanlder.push(errors.minL)
    }
    if( passL > maxLength ){
        errorHanlder.push(errors.maxL)
    }
    if( !hasUpperCase.test(password) ){
        errorHanlder.push(errors.upper)
    }
    if( !hasLowerCase.test(password)){
        errorHanlder.push(errors.lower)
    }
    if( !hasNumber.test(password)){
        errorHanlder.push(errors.number)
    }
    if( !hasSpecialChar.test(password)){
        errorHanlder.push(errors.special)
    }

    return { isValid: isValid ,data:errorHanlder}
}
