export const emailValidator = (email) => {
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
return {status: pattern.test(String(email).toLowerCase()), data: String(email).toLowerCase()};
}

export const emailSanitizer = (email) => {
const sanitizedEmail = email.replace(/[<>]g/,"");
return sanitizedEmail

}
