import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfig, DatabaseConfig } from './config';
import { UsersModule } from './users/users.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';  
import { User } from './users/entities/user.entity';
import { AuthJwtModule } from './jwt/auth-jwt.module';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [    
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [AppConfig, DatabaseConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
        entities: [User, Product],
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    SubscribersModule,
    ProductsModule,
    AuthModule,
    AuthJwtModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
