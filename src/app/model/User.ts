
export class User {
    id: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    companyId: number;
};

export type CreateUserRequest = {
  emailAddress: string;
  firstName: string;
  lastName: string;
  companyId: number;
  password: string;
};

export type CreateUserV2Request = {
  emailAddress: string;
  firstName: string;
  lastName: string;
};

export type CreateUserV2Response = {
  user: User;
};

export type CreateUserResponse = {
  user: User;
};

export type GetAllUsersResponse = {
  usersList: User[];
};

export type GetUserByEmailAddressRequest = {
  emailAddress: string;
};

export type GetUserByEmailAddressResponse = {
  user: User;
};

export type GetUserByAuthTokenRequest = {
  authToken: string;
};

export type GetUserByAuthTokenResponse = {
  user: User;
};

export type GetUsersResponse = {
  usersList: User[];
};




