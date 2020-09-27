import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gato, GatoSchema } from './gato';
import { GatosService } from './gatos.service';
import { GatosController } from './gatos.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Gato.name,
        schema: GatoSchema
      }
    ])
  ],
  exports: [],
  controllers: [GatosController],
  providers: [GatosService]
})
export class GatosModule {}
