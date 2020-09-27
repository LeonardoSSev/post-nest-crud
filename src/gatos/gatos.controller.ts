import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Gato } from './gato';
import { GatosService } from './gatos.service';

@Controller('gatos')
export class GatosController {
  constructor(
    private readonly gatosService: GatosService
  ) {}

  @Get()
  async listarTodos(): Promise<Gato[]> {
    return this.gatosService.listarTodos();
  }

  @Post()
  async criar(@Body() gato: Gato): Promise<Gato> {
    return this.gatosService.criar(gato);
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string): Promise<Gato> {
    return this.gatosService.buscarPorId(id);
  }

  @Put(':id')
  async atualizar(@Param('id') id: string, @Body() gatoAtualizado: Gato): Promise<Gato> {
    return this.gatosService.atualizar(id, gatoAtualizado);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Gato> {
    return this.gatosService.remover(id);
  }

}
