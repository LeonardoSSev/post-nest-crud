import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosModule } from './gatos/gatos.module';

@Module({
  imports: [
    MongooseModule.forRoot(''), // Insira aqui a string de conexão do MongoDB
    GatosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
