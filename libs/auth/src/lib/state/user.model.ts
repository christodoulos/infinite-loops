export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  emailVerified: boolean;
  loading?: boolean;
}

export const createInitialUser = () =>
  ({
    uid: '',
    email: '',
    photoURL: '',
    displayName: '',
    emailVerified: false,
    loading: false,
  } as User);
