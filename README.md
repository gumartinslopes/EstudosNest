# Notas de Nest Js
NestJs é um framework que trabalha juntamente com o node js para a gente construir aplicações 
back-end, com ele iremos utilizar *typescript* juntamente com o *express*, ou *fastify*. O ponto 
forte no nest Js é a *arquitetura* que divide a aplicação em funções bem definidas(modules, controllers e services) .

## Instalação
O primeiro passo para instalar o nest é instalar a cli, para fazer isso basta utilizar:
`npm i -g @nestjs/cli`

Agora quando quisermos criar um projeto basta inserir:
`nest new project-name`

Se quisermos ligar o servidor basta utilizar,  no caso do npm,o comando,:
`npm run start`

## Modules
Um @Module decorator provê todos os metadados que o nest utiliza para gerenciar a nossa aplicação, para criar um módulo basta digitar o seguinte comando na cli:
```
nest generate module nome-module
ou
nest g module nome-module
```


## Controllers
São responsáveis pelo controle das requisições da nossa aplicação, ou seja, toda a comunicação de
rotas (get, post, put, delete) irá ser feito por aqui.Para criar uma rota a partir de um comando da cli basta digitar:
``` 
nest generate controller nome-controller
ou
nest g controller nome-controller
```
Para que um método possa fazer requisições utilizaremos decorators para definir os tipos de rota:
 - get: @Get()
 - post: @Post()
 - put: @Put()
 - delete: @Delete()

 Eis um exemplo de controller que trata de uma entidade courses(cursos):

 ```
import { Controller, Get} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(){
        return 'Listando todos os nosso cursos';
    }
}
 ```

## Services
Services são responsáveis por toda a regra de negócio da nossa aplicação, ou seja, o código real 
que faz todo o trabalho que define a nossa aplicação. para criar um service com nest basta 
utilizar o comando:
``` 
nest generate service nome-service
ou
nest g service nome-service
```