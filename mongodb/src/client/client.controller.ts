/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    @Post()
    create(@Body() CreateClientDto: CreateClientDto){
        // const data = CreateClientDto
        // console.log(data)
        return this.clientService.create(CreateClientDto)
    }

    @Get()
    findall(){
        return this.clientService.findall()
    }
}
