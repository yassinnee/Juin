import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 5432,
  nodenv: process.env.NODE_ENV,
}));
