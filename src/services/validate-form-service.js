export class ValidationError extends Error {
  constructor(type = null, message) {
    super(message);

    this.errorType = type;
  }
}

const ValidateFormService = {
  email(email) {
    const emailPatt = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailPatt.test(email))
      throw new ValidationError('email', 'Valid email address required');
  },
  username(username) {
    const usernamePatt = /[\W\s]/;
    //const usernamePatt2 = /\s/;
    if (username.length < 3 || username.match(usernamePatt))
      //|| username.match(usernamePatt2))
      throw new ValidationError(
        'username',
        'Username must be more then 3 characters, and free of special characters or spaces'
      );
  },
  password(pass) {
    const reg = /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%&*()_+=|<>?{}[\]~-])/;

    if (pass.length < 5 || !pass.match(reg))
      throw new ValidationError(
        'password',
        'Password must be at least 5 characters, and contain at least 1 digit, 1 capital, and 1 special character'
      );
  },
  passwordMatch(pass1, pass2) {
    if (pass1 !== pass2)
      throw new ValidationError('password', 'Passwords must match');
  },
};

export default ValidateFormService;
