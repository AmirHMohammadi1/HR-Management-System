/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor (private userService: UserService ){}

    @Get()
    create(@Query() CreateUserDto: CreateUserDto){
        return this.userService.create(CreateUserDto)
    }

    @Get('/users')
    findall(){
        return this.userService.findall()
    }
}
