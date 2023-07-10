import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import{CreateUserDto} from './Dto/create-User.dto';
import {UsersService} from './users.service';
import {User} from './users.entity'; 
import {get} from 'https';



@Controller('users')
export class UsersController {
    constructor(private usersService : UsersService ){}
    @Post()
    createUserDto(@Body() newUser : CreateUserDto){
        console.log(newUser)
        return this.usersService.createUser(newUser)
    }

    @Get()
    getUsers():Promise<User[]>{
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id:number) : Promise<User>{
        return this.usersService.getUser(id);
    }

    @Post()
    createUser(@Body() newUser: CreateUserDto){
        return this.usersService.createUser(newUser)
    }

}
