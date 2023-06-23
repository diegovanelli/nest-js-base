import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

export class TodoRepository extends Repository<Todo> {}
