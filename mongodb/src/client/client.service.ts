/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
    constructor ( private prisma: PrismaService) {}
    
    async create(CreateClientDto: CreateClientDto){
        // console.log(CreateClientDto.name)
        return this.prisma.clientApp.create({
            data: CreateClientDto
        })
    }

    async findall(){
        return this.prisma.clientApp.findMany()
    }
}
