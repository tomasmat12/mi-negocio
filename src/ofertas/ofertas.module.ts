import { Module } from '@nestjs/common';
import { OfertasService } from './ofertas.service';
import { OfertasController } from './ofertas.controller';
import { Oferta } from './entities/oferta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Oferta])],
  controllers: [OfertasController],
  providers: [OfertasService]
})
export class OfertasModule {}
