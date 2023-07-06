import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User} from './users.entity';
import{Repository} from 'typeorm';
import { CreateUserDto } from './Dto/create-User.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)private userRepository: Repository<User>){}

        createUser(user:CreateUserDto){
            const NewUser = this.userRepository.create(user)
            return this.userRepository.save(NewUser)
        }
    
}
