import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Crud({
    model:{
        type: User
    }
})
@Controller('users')
export class UsersController implements CrudController<User>{
    // @Get()
    // getUsers() {
    //     return 'Usesr[]'
    // }

    constructor(public service:UsersService) {}
}
