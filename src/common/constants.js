/* ROUTERS  */
export const ROUTES = {
  // COMMON ROUTES
  HOME: "/",
  LOGIN_SEEKER: "/login",
  LOGIN_OWNER: "/login-owner",
  LOGIN_ADMIN: "/login-admin",
  LOGOUT: "/logout",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/password-reset/:userId/:token",
  SIGNUP_SEEKER: "/register",
  SIGNUP_OWNER: "/register-owner",
  SIGNUP_ADMIN: "/register-admin",
  // Dashboard Routes
  MAIN: "/app/*",
  DASHBOARD: "/",
  TEST: "/test",
  USERS_MANAGEMENT: "/users",
  // MISC
  UNKNOWN: "*",
  ERROR: "/error",
};

/* Authentication */
export const TOKEN = "TOKEN";
export const USER = "USER";
export const ADMIN = "ADMIN";
export const USER_ID = "USER_ID";
export const ROLE = "ROLE";

export const ROLES = {
  SUPER_ADMIN: "Admin",
  ROOM_OWNER: "Owner",
  ROOM_SEEKER: "Seeker",
};
