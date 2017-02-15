import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'todo-list',
  templateUrl: 'todoList.html'
})

export class TodoList
{
  public todoList: Array<Todo>;

  constructor(public navCtrl: NavController)
  {
    let todoOne = new Todo("Buy Iphone", "Use the sale at bestbuy");
    let todoTwo = new Todo("Buy new Mac");
    let todoThree = new Todo("Make dinner", "Ramen Noodles");

    todoThree.complete = true;
    todoOne.id = "1";
    todoTwo.id = "2";
    todoThree.id = "3";

    this.todoList = [
      todoOne,
      todoTwo,
      todoThree
    ];
  }

}
