
export const checkValidData = (email,password) => {
    const isEmailValid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password);

    // If email or password is invalid;
    if(!isEmailValid) return "Email Invaild !!!";
    if(!isPasswordValid) return "Not a strong password";

    // if email and password are valid;
    return null;
}

export const checkUserData = (email,phoneNumber,fullname,password) => {
    const isEmailValid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password);
    const isPhoneNumberValid = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/.test(phoneNumber)
    const isFullNameValid = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/.test(fullname);

    // If email or password is invalid;
    if(!isEmailValid) return "Email Invaild !!!";
    if(!isPasswordValid) return "Not a strong password";
    if(!isPhoneNumberValid) return "Phone Number not valid";
    if(!isFullNameValid) return "Name not valid";

    // if email and password are valid;
    return null;
}
