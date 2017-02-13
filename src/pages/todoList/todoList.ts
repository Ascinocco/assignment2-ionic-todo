import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'todo-list',
  templateUrl: 'todoList.html'
})

export class TodoList
{
    constructor(public navCtrl: NavController)
    {

    }
}
