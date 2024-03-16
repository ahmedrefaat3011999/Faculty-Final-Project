export const IdentityController = {
    Login: `identity/login`,
    Register: `identity/register`,
    resetnewpassword:`identity/Reset-Password`,
    ForgetPassword:`identity/forget-password`,
    ResetPassword: (email: string) => `identity/${email}/reset-password`,
    ChangePassword: 'identity/change-password',
    RegisterWithExternal: 'identity/register-with-third-part',
    LoginWithExternal: 'identity/login-with-third-part',
    ProfileDetails: 'identity/profile-details',
    UpdateProfile: 'identity/profile',
  }
  