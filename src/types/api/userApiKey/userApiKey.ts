import type { components, operations } from "@/types/api/base";

export type UserApiKeyListResponse =
  components["schemas"]["UserApiKeyListRead"];

export type UserApiKeyRead = components["schemas"]["UserApiKeyRead"];

export type UserApiKeyListRequestQuery =
  operations["user_api_keys_list_user_api_keys_user_api_keys_get"]["parameters"]["query"];
