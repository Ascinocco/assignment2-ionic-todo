import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todo } from './Models/Todo';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'todo-list',
  templateUrl: 'todoComponent.html'
})

export class TodoComponent
{
  public todoList: FirebaseListObservable<any[]>;
  public newTodo: string;
  public todoCount: number;
  //private db: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, af: AngularFire)
  {
    this.todoList = af.database.list('/todos');
    this.newTodo  = "";
  }

  public createTodo()
  {
    if(this.newTodo.length > 0) {
      var newTodo = new Todo(this.newTodo);
      this.todoList.push(newTodo);
      this.newTodo = "";
    }
  }

  public updateTodo(todo)
  {
    this.todoList.update(todo.$key, {
      title: todo.title,
      notes: todo.notes,
      complete: todo.complete
    })
  }

  public deleteTodo(todo)
  {
    this.todoList.remove(todo);
  }
}
