import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gato } from './gato';

@Injectable()
export class GatosService {
  constructor(
    @InjectModel(Gato.name) private gatoModel: Model<Gato>
  ) {}

  async listarTodos(): Promise<Gato[]> {
    return this.gatoModel.find().exec();
  }

  async criar(gato: Gato): Promise<Gato> {
    const gatoCriado = new this.gatoModel(gato);

    return gatoCriado.save();
  }

  async buscarPorId(id: string): Promise<Gato> {
    return this.gatoModel.findById(id).exec();
  }

  async atualizar(id: string, gato: Gato): Promise<Gato> {
    return this.gatoModel.findByIdAndUpdate(id, gato).exec();
  }

  async remover(id: string) {
    const gatoApagado = this.gatoModel.findOneAndDelete({ _id: id }).exec();

    return (await gatoApagado).remove();
  }
}
