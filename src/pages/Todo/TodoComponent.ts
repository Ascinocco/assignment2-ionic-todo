/**
 * TodoComponent.ts
 * Anthony Scinocco 200271982
 * Hanles application logic. Takes care of building page and handling operations
 */

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
  public displayComplete: boolean;
  public tempTitle: string;
  public tempNotes: string;

  constructor(public navCtrl: NavController, af: AngularFire)
  {
    // pull in list of todos
    this.todoList = af.database.list('/todos');
    this.displayComplete = false;
    this.newTodo  = "";
  }

  /**
   * Stores todo data temporarily so that original todo details can be stored iif
   * cancel button is pressed
   * @param  {[type]} title [description]
   * @param  {[type]} notes [description]
   * @return {[type]}       [description]
   */
  public storeData(title, notes)
  {
    this.tempTitle = "";
    this.tempNotes = "";
    this.tempTitle = title;
    this.tempNotes = notes;
  }

  /**
   * Reset todo details
   * @param  {[type]} todo [description]
   * @return {[type]}      [description]
   */
  public cancel(todo)
  {
    todo.title = this.tempTitle;
    todo.notes = this.tempNotes;
  }

  /**
   * Create todo, save it in fire base
   * @return {[type]} [description]
   */
  public createTodo()
  {
    if(this.newTodo.length > 0) {
      var newTodo = new Todo(this.newTodo);
      this.todoList.push(newTodo);
      this.newTodo = "";
    }
  }

  /**
   * update todo based on $key in firebase
   * @param  {[type]} todo [description]
   * @return {[type]}      [description]
   */
  public updateTodo(todo)
  {
    this.todoList.update(todo.$key, {
      title: todo.title,
      notes: todo.notes,
      complete: todo.complete
    })
  }

  /**
   * delete todo from firebase 
   * @param  {[type]} todo [description]
   * @return {[type]}      [description]
   */
  public deleteTodo(todo)
  {
    this.todoList.remove(todo);
  }
}
