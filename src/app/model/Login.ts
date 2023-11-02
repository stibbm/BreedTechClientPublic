
export type AuthToken = {
  authTokenId: number;
  emailAddress: string;
  authToken: string;
  accountType: string;
  validUntilUnixTime: number;
};

export type LoginRequest = {
  emailAddress: string;
  password: string;
};

export type LoginResponse = {
  authToken: AuthToken;
  message: string;
  loginSuccessful: boolean;
};
