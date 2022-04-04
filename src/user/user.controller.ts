import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get('list')
    getAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    get(@Param('id') id:string){
        return this.userService.find(id);
    }

    @Post()
    create(@Body() body:any){
        return this.userService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body:any){
        return this.userService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.userService.delete(id);
    }
}
