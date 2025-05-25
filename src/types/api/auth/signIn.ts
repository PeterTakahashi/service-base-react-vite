import type { components } from "@/types/api/base";

export type SignInRequestBody =
  components["schemas"]["Body_auth_cookie_login_auth_cookie_login_post"];

export type SignInResponse = components["schemas"]["BearerResponse"];
