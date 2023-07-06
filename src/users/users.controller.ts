import { Controller, Post, Body, Get } from '@nestjs/common';
import{CreateUserDto} from './Dto/create-User.dto';
import {UsersService} from './users.service';
import {get} from 'https';



@Controller('users')
export class UsersController {
    constructor(private usersService : UsersService ){}
    @Post()
    createUserDto(@Body() newUser : CreateUserDto){
        console.log(newUser)
        return this.usersService.createUser(newUser)
    }
}
