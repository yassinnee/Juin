import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthJwtService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Email not found');
    }
    if (user.password !== pass) {
      throw new UnauthorizedException('Invalid password');
    }
    const { password, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, type: user.Type };
    return {
      message: 'Login successful',
      access_token: this.jwtService.sign(payload),
      user: { email: user.email, type: user.Type , id: user.id }
    };
  }
}
