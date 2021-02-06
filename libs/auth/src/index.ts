export * from './lib/state';
export * from './lib/auth.guard';
export * from './lib/auth.service';

export interface Credentials {
  username: string;
  password: string;
}
