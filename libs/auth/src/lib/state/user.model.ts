export interface User {
  uid: string;
  firstName?: string;
  lastName?: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  emailVerified: boolean;
  loading?: boolean;
}

export const createInitialUser = () =>
  ({
    uid: '',
    firstName: '',
    lastName: '',
    email: '',
    photoURL: '',
    displayName: '',
    emailVerified: false,
    loading: false,
  } as User);
