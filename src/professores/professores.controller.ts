import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Professor } from './shared/professor';
import { ProfessorService } from './shared/professor.service';

@Controller('professores')
export class ProfessoresController {

    constructor(
        private professorService: ProfessorService
        ){ }

    @Get()
    async getAll(): Promise<Professor[]>{
        return this.professorService.getAll();
    }    

    @Get(':id')
    async getAgetById(@Param('id')id:number): Promise<Professor>{
        return this.professorService.getById(id);
    } 

    @Post()
    async create(@Body() professor: Professor): Promise<Professor>{
        return this.professorService.create(professor);
    }

    @Put()
    async update(@Param('id') id: number, @Body() professor: Professor): Promise<Professor>{
        professor.id = id;
        return this.professorService.update(professor);
    }

    @Delete(':id')
    async delete(@Param('id') id:number){
        this.professorService.delete(id);

    }
}
