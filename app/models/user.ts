// Entity interface that matches actual API typing
export interface IUser {
  token: string;
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  image?: string;
  emailVerifiedAt: string;
  createdAt: string;
  updatedAt: string;
}
