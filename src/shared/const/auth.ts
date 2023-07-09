export enum AuthConst {
    LOG_IN = 'Log in',
    CREATE_AN_ACCOUNT = 'Create an account',
    DO_NOT_HAVE_AN_ACCOUNT = 'Don\'t have an account?',
    EMAIL = 'Email',
    PASSWORD = 'Password',
    SELECT_YOUR_GENDER = 'Select your gender',
    CONFIRM = 'Confirm',
}

export enum AuthException {
    IS_NOT_EMAIL = 'Invalid email address',
    IS_SHORT_EMAIL = 'Email should be greater than 3 characters',
    IS_NOT_PASSWORD = 'The length of the password must be between 8 and 12 characters',
}