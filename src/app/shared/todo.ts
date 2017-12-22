export class Todo {
  id: number;
  name: string;
  description: string;
  completed: boolean


  constructor(id: number, name: string, description: string, completed?: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.completed = completed;
  }


}
