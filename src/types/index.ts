export type User = {
  userName: string;
};

export interface UsersDict {
  [key: string]: User;
}

export interface HeadpatUsersDict {
  [key: string]: number;
}
