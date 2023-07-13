import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User} from './users.entity';
import{Repository} from 'typeorm';
import { CreateUserDto } from './Dto/create-User.dto';
import{UpdateUserDto} from './Dto/update-User.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)private userRepository: Repository<User>){}

        createUser(user:CreateUserDto){
            const NewUser = this.userRepository.create(user)
            return this.userRepository.save(NewUser)
        }

        getUsers(){
            return this.userRepository.find()
        }

        getUser(id:number){
            return this.userRepository.findOne({
                where:{
                    id:id
                }
            })
        }
    
        deleteUser(id:number){
            return this.userRepository.delete({id});
        }

        updateUser(id:number, user:UpdateUserDto){
            return this.userRepository.update({id}, user)
        }
}
