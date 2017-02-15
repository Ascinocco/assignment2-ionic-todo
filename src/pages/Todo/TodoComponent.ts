import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todo } from './Models/Todo';

@Component({
  selector: 'todo-list',
  templateUrl: 'todoComponent.html'
})

export class TodoComponent
{
  public todoList: Array<Todo>;
  public newTodo: string;
  public todoCount: number;

  constructor(public navCtrl: NavController)
  {
    //temp mock data
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

    this.countTodos();

    this.newTodo = "";
  }


public countTodos()
{
  this.todoCount = this.todoList.length;
}

/**
 * Get todo's from server
 * @return {[type]} [description]
 */
  public fetchTodos()
  {
    // get todo from server
    let todoTwo = new Todo("Buy new Mac");
    let todoThree = new Todo("Make dinner", "Ramen Noodles");

    this.todoList = [ todoThree, todoTwo ];

    this.countTodos();
  }

  public createTodo()
  {
    if(this.newTodo.length > 0) {
      console.log(this.newTodo);

      var newTodo = new Todo(this.newTodo);

      // upload to db
      // should really be a fetch so that we can get id
      this.todoList.push(newTodo);

      this.newTodo = "";

      this.countTodos();
    }
  }
}
