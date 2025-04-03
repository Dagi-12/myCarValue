import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp(email: string, password: string) {
    //see if email is in use
    const user = await this.usersService.find(email);
    if (user.length) {
      throw new BadRequestException('Email in use');
    }
    //hash password
    //create a user and save it
    //return the user
  }
  signIn() {}
}
