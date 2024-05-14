import {ConflictException, Injectable, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTable } from '../entity/userdb/user.entity';
import { Repository } from 'typeorm';
import { SubscribeDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserTable)
    private table: Repository<UserTable>,
  ) {}

  public async subscribe(subscribeDto: SubscribeDto) {
    const user = await this.table.findOneBy({ email: subscribeDto.email });

    if (user) {
      throw new ConflictException('User already exists');
    }

    const newUser = this.table.create(subscribeDto);
    await this.table.save(newUser);

    return newUser
  }
}
