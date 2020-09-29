import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Aluno } from './shared/aluno';
import { AlunoService } from './shared/aluno.service';

@Controller('alunos')
export class AlunosController {


    constructor(
        private alunoService: AlunoService
        ){ }

    @Get()
    async getAll(): Promise<Aluno[]>{
        return this.alunoService.getAll();
    }    

    @Get(':id')
    async getAgetById(@Param('id')id:string): Promise<Aluno>{
        return this.alunoService.getById(id);
    } 

    @Post()
    async create(@Body() aluno: Aluno): Promise<Aluno>{
        return this.alunoService.create(aluno);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() aluno: Aluno): Promise<Aluno>{
        return this.alunoService.update(id, aluno);
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        this.alunoService.delete(id);

    }
}
