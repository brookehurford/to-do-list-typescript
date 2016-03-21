/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

export var listTasksByType = function(type: string, taskCollection: Task[]):
 String[] {
   var types: String[] = [];
   for( var task of taskCollection){
     if(task.taskType === type) {
       types.push(task.description);
     }
   }
   return types;
 }
 export var listTasksByPriority = function(taskPriority: string, taskCollection: Task[]): String[] {
    var priorities: String[] = [];
    for(var task of taskCollection) {
      if(task.priority === taskPriority) {
        priorities.push(task.description);
      }
    }
    return priorities;
  }

  export var personHighPriority = function(highPriority: string, assignee: IPerson, taskCollection: Task[]): String[]{
    var highPerson: String[] = [];
    for(var task of taskCollection) {
      if((task.priority === highPriority)&&(
      task.assignedTo === assignee)) {
        highPerson.push(task.description);
      }
    }
    return highPerson;
  }
}
