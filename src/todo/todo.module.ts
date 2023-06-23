import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ Todo ])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {
  constructor(private dataSource: DataSource) {};
}
