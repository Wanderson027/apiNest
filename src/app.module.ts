import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurmasModule } from './turmas/turmas.module';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule} from  './professores/professores.module';
import { MongooseModule} from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/APINest'),
    // MongooseModule.forRoot('mongodb+srv://root:senha_da_nasa@cluster0.1yxnl.mongodb.net/APINest?retryWrites=true&w=majority'),    
    TurmasModule,
    AlunosModule,
    ProfessoresModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
