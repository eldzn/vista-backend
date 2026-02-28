import {
  Controller,
  Post,
  Get,
  Body,
  Res,
  UseGuards,
  Req,
  UnauthorizedException,
  Patch,
} from '@nestjs/common';
import type { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { TokensService } from '../../tokens/tokens.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { RefreshGuard } from '../../tokens/guards/refresh.guard';
import { JwtAuthGuard } from '../../tokens/guards/jwt-auth.guard';
import { UpdateProfileDto } from './dtos/update-profile.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private tokensService: TokensService,
  ) {}

  @Post('register')
  async register(@Body() dto: RegisterDto, @Res() res: Response) {
    const { user, tokens } = await this.authService.register(dto);
    this.tokensService.setCookies(res, tokens.accessToken, tokens.refreshToken);
    return res.json({ user });
  }

  @Post('login')
  async login(@Body() dto: LoginDto, @Res() res: Response) {
    const { user, tokens } = await this.authService.login(dto);
    this.tokensService.setCookies(res, tokens.accessToken, tokens.refreshToken);
    return res.json({ user });
  }

  @Post('refresh')
  @UseGuards(RefreshGuard)
  async refresh(@Req() req: Request, @Res() res: Response) {
    const userId = (req as any).user?.userId;
    if (!userId) throw new UnauthorizedException('Не авторизован');
    const tokens = await this.authService.refreshTokens(userId);
    this.tokensService.setCookies(res, tokens.accessToken, tokens.refreshToken);
    return res.json({ message: 'Токены обновлены' });
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    this.tokensService.clearCookies(res);
    return res.json({ message: 'Выход выполнен' });
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: Request) {
    const userId = (req as any).user?.userId;
    if (!userId) throw new UnauthorizedException('Не авторизован');
    return this.authService.getProfile(userId);
  }
}
