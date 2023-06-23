import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: TodoRepository,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({id});
  }

  async create(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  async update(id: number, todo: Todo): Promise<Todo> {
    await this.todoRepository.update(id, todo);
    return this.todoRepository.findOneBy({id});
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
