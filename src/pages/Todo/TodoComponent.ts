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
  private db: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, af: AngularFire)
  {
    //temp mock data
    // let todoOne = new Todo("Buy Iphone", "Use the sale at bestbuy");
    // let todoTwo = new Todo("Buy new Mac");
    // let todoThree = new Todo("Make dinner", "Ramen Noodles");
    //
    // todoThree.complete = true;
    // todoOne.id = "1";
    // todoTwo.id = "2";
    // todoThree.id = "3";
    //
    // this.todoList = [
    //   todoOne,
    //   todoTwo,
    //   todoThree
    // ];
    this.db = af.database.list('/todos');



    this.todoList = af.database.list('/todos');
    // this.fetchTodos();

    this.countTodos();
    this.newTodo = "";


  }


public countTodos()
{
  // this.todoCount = this.todoList.length;
}

/**
 * Get todo's from server
 * @return {[type]} [description]
 */
  public fetchTodos()
  {
    // get todo from server
    // let todoTwo = new Todo("Buy new Mac");
    // let todoThree = new Todo("Make dinner", "Ramen Noodles");
    //
    // this.todoList = [ todoThree, todoTwo ];

    // this.db.once('value').then(function(snapshot) {
    //   console.log(snapshot);
    // })

    this.countTodos();
  }

  public createTodo()
  {
    if(this.newTodo.length > 0) {

      // let todoRef = this.db.ref("todos");

      console.log(this.newTodo);

      var newTodo = new Todo(this.newTodo);

      this.db.push(newTodo);

      // upload to db
      // should really be a fetch so that we can get id
      // this.todoList.push(newTodo);

      this.newTodo = "";

      this.fetchTodos();
      this.countTodos();
    }
  }
}
