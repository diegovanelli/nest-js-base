import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { UsuarioModule } from './usuario/usuario.module';
import { FitroDeExcecaoHttp } from './common/filtros/filtro-de-excecao-http.filter';
import { TransformaRespostaInterceptor } from './core/http/transforma-resposta.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

require('dotenv').config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'cockroachdb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      database: 'defaultdb',
      username: 'root',
      password: 'root',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TodoModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FitroDeExcecaoHttp,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor,
    },
  ],
})
export class AppModule {}
