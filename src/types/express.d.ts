import 'express';

declare module 'express' {
  interface Request {
    cookies: {
      accessToken?: string;
      refreshToken?: string;
    };
    user?: {
      id: string;
      email: string;
      role: string;
    };
  }
}
