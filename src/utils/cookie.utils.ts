import { Response } from 'express';

export const setAccessTokenCookie = (response: Response, token: string) => {
  response.cookie('accessToken', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 15 * 60 * 1000,
    path: '/',
  });
};

export const setRefreshTokenCookie = (
  response: Response,
  token: string,
  rememberMe: boolean,
) => {
  const maxAge = rememberMe ? 30 * 24 * 60 * 60 : 7 * 24 * 60 * 60;

  response.cookie('refreshToken', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: maxAge * 1000,
    path: '/',
  });
};

export const clearAuthCookies = (response: Response) => {
  response.clearCookie('accessToken', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
  });

  response.clearCookie('refreshToken', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
  });
};
