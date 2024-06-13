import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';


config();

const configService = new ConfigService();

const dataSource = new DataSource({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: parseInt(configService.get<string>('DB_PORT'), 10), // Convertir le port en nombre
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [`${__dirname}/../src/**/entities/*.entity.{js,ts}`], // Chemin vers toutes les entités dans le projet
  synchronize: false, // Désactiver la synchronisation automatique
  logging: configService.get<string>('NODE_ENV') === 'development' || configService.get<string>('NODE_ENV') === 'test',
  migrations: [`${__dirname}/migrations/*.{js,ts}`], // Chemin vers toutes les migrations
  migrationsTableName: 'migrations',
});

export default dataSource;
