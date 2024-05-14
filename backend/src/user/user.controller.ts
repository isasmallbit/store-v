import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { SubscribeDto } from './dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(
    private user: UserService,
  ) {}

  @Post('subscribe')
  async subscribe(@Body() subscribeDto: SubscribeDto) {
    await this.user.subscribe(subscribeDto);

    return { statusCode: HttpStatus.OK, message: 'Successfully subscribed!' };
  }
}
