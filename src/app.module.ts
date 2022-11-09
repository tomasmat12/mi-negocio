import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Producto } from './productos/entities/producto.entity';
import { ProductosModule } from './productos/productos.module';
import { OfertasModule } from './ofertas/ofertas.module';
import { Oferta } from './ofertas/entities/oferta.entity';
//New
const db_options = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, 
}


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...db_options, //New
      //url: process.env.DATABASE_URL,
      entities: [Producto, Oferta],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      }
    }),
    ProductosModule,
    OfertasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
