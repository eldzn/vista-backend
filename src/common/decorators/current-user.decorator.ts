import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export interface JwtPayload {
  sub: string;
  email: string;
  nickname?: string;
}

export interface RequestWithUser extends Request {
  user: JwtPayload;
}

export const CurrentUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, ctx: ExecutionContext) => {
    const request: RequestWithUser = ctx.switchToHttp().getRequest()

    if (!request.user) {
      throw new UnauthorizedException('Пользователь не авторизован')
    }

    if (data) {
      const value = request.user[data]
      if (!value) {
        throw new UnauthorizedException(`Поле ${data} не найдено`)
      }
      return value
    }
    return request.user
  }
)