export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedinURL?: string;
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
    linkedinURL: '',
    photoURL: '',
    displayName: '',
    emailVerified: false,
    loading: false,
  } as User);
