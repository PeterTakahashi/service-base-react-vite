export const errorCodesMap: Record<string, string> = {
  LOGIN_BAD_CREDENTIALS:
    "Invalid credentials or your account is inactive. Please try again.",
  LOGIN_USER_NOT_VERIFIED:
    "Your account is not verified. Please verify your account before signing in.",
  REGISTER_USER_ALREADY_EXISTS:
    "A user with this email already exists. Please try a different email.",
  REGISTER_INVALID_PASSWORD:
    "Password validation failed. Please make sure it meets the requirements.",
  RESET_PASSWORD_BAD_TOKEN:
    "This password-reset link is invalid or has expired. Please request a new one.",
  RESET_PASSWORD_INVALID_PASSWORD:
    "Password validation failed. Please ensure it meets the required criteria.",
  VERIFY_USER_BAD_TOKEN:
    "Invalid token or this email does not match our records.",
  VERIFY_USER_ALREADY_VERIFIED:
    "This account is already verified. You can sign in normally.",
  UPDATE_USER_EMAIL_ALREADY_EXISTS:
    "A user with this email already exists. Please try a different one.",
  UPDATE_USER_INVALID_PASSWORD:
    "Password validation failed. Please ensure it meets the requirements.",
  LOGIN_ACCOUNT_LOCKED:
    "Your account is locked due to multiple failed login attempts. Please contact support.",
};
