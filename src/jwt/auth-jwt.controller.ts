import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthJwtService } from './auth-jwt.service';

@Controller('auth')
export class AuthJwtController {
  constructor(private authService: AuthJwtService) {}

  @Post('login')
  async login(@Body() body: { email: string, password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
