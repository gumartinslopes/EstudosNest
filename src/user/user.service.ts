import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity.js'
@Injectable()
export class UserService {
    private bd : User [] = [
        {
            "id": "1",
            "name": "Ash",
            "email": "ashes@gmail.com",
            "password": "1234",  
            "pokemon":["Pikachu","Bulbassauro", "Cindaquil"]
        },
        {
            "id": "2",
            "name": "Misty",
            "email": "misty@gmail.com",
            "password": "4321",  
            "pokemon":["Digglypuff","Squirtle", "Totodyle"]
        },
        {
            "id": "3",
            "name": "Brock",
            "email": "brockudo@gmail.com",
            "password": "2341",  
            "pokemon":["Onyx","Zubat"]
        }
    ];

    findAll(){
        return this.bd;
    }

    find(id: string){
        return this.bd.find((user: User)=>user.id === id);
    }

    create(userObj: any){
        this.bd.push(userObj);
        return `Usuario de id ${userObj.id} foi criado com sucesso`;
    }

    update(id: string, updateObj:any){
        const updateIndex = this.bd.findIndex((user: User)=> user.id === id);
        if(updateIndex >= 0)
            this.bd[updateIndex] = updateObj;
        return `Usuário de id ${id} foi atualizado com sucesso`;
    }

    delete(id: string){
        const deleteIndex = this.bd.findIndex((user: User)=> user.id === id);
        if(deleteIndex >= 0){
            this.bd.splice(deleteIndex, 1);
            return `Usuário de id ${id} foi deletado com sucesso`;
        }
    }
}
