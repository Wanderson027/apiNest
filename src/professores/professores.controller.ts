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
    async getAgetById(@Param('id')id:string): Promise<Professor>{
        return this.professorService.getById(id);
    } 

    @Post()
    async create(@Body() professor: Professor): Promise<Professor>{
        return this.professorService.create(professor);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() professor: Professor): Promise<Professor>{
        return this.professorService.update(id, professor);
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        this.professorService.delete(id);

    }
}
