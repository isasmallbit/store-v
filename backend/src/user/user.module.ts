import { Module } from '@nestjs/common';
import { UserTable } from '../entity/userdb/user.entity';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([UserTable])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
