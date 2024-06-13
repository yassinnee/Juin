import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    console.log('Received data:', createUserDto);
    try {
      return await this.authService.signUp(createUserDto);
    } catch (error) {
      console.error('Error in signUp:', error);
      throw error;
    }
  }


  @Get('test')
  async test() {
    return { message: 'Sa marche !' };
  }
}
