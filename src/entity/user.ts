import { TaskList } from "./task";

export interface User {
  id?: string | number;
  name: string;
  email: string;
  password: string;
  task_lists: TaskList[];
  token?: string;
}