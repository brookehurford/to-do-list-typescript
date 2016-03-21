module ToDoList {

  export interface IPerson {
    name: string;
    email: string;
    phone?: string;
  }

  export interface ITask {
    description: string;
    done: boolean;
    priority: string;
    taskType: string;
    markDone(): void;
    assignedTo?: IPerson;
  }

  export class Task implements ITask {
    done: boolean = false;
    constructor(public description: string,
                public priority: string,
                public taskType: string,
                public assignedTo?: IPerson){}
    markDone(){
      this.done = true;
    }
  }

  export class HomeTask extends Task {
      constructor(public description: string,
                  public priority: string,
                  public assignedTo?: IPerson){
        super(description, priority, "home");
    }
  }

  export class HobbyTask extends Task{
    constructor(public description: string) {
      super(description, "Low", "hobby");
    }
  }

  export class WorkTask extends Task{
    constructor(public dueDate: Date,
                public description: string,
                public priority: string,
                public assignedTo?: IPerson){
      super(description, priority, "work", assignedTo);
    }
  }
}
