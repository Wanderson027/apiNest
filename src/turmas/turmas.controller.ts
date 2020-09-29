import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Turma } from './shared/turma';
import { TurmaService } from './shared/turma.service';

@Controller('turmas')
export class TurmasController {

    constructor(
        private turmaService: TurmaService
        ){ }

    @Get()
    async getAll(): Promise<Turma[]>{
        return this.turmaService.getAll();
    }    

    @Get(':id')
    async getAgetById(@Param('id')id:string): Promise<Turma>{
        return this.turmaService.getById(id);
    } 

    @Post()
    async create(@Body() turma: Turma): Promise<Turma>{
        return this.turmaService.create(turma);
    }

    @Put()
    async update(@Param('id') id: string, @Body() turma: Turma): Promise<Turma>{
        return this.turmaService.update(id, turma);
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        this.turmaService.delete(id);

    }
}
