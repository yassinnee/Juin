import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthJwtService } from './auth-jwt.service';
import { AuthJwtController } from './auth-jwt.controller';
import { AuthJwtStrategy } from './auth-jwt.strategy';
import { UsersService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'yass',
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthJwtService, AuthJwtStrategy, UsersService],
  controllers: [AuthJwtController],
})
export class AuthJwtModule {}
