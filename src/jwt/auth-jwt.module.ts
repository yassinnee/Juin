import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthJwtService } from './auth-jwt.service';
import { UsersService } from '../users/users.service';
import { AuthJwtController } from './auth-jwt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { AuthJwtStrategy } from './auth-jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'yass',
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthJwtService, UsersService, AuthJwtStrategy],
  controllers: [AuthJwtController],
})
export class AuthJwtModule {}
