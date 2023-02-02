import { User } from './user'

export interface Task {
  id?: string | number;
  name: string;
  description: string;
  dead_line: Date;
  is_completed: boolean;
}

export interface TaskList {
  id?: string | number;
  name: string;
  dead_line: Date;
  tasks: Task[];
  created_by: User
}