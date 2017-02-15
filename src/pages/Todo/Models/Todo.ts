export class Todo
{
  public title: string;
  public notes: string;
  public id: string;
  public complete: boolean;

  public showDetails: boolean;

  constructor(title: string, notes?: string)
  {
    if (notes) {
      this.notes = notes;
    } else {
      this.notes = "";
    }

    this.title = title;
    this.complete = false;
  }

  /**
   * Show my details
   * @return {[type]} [description]
   */
  public displayDetails()
  {
    this.showDetails = true;
  }

  /**
   * Hide my details
   * @return {[type]} [description]
   */
  public hideDetails()
  {
    this.showDetails = false;
  }

  /**
   * update my details
   * @return {[type]} [description]
   */
  public update(todo: Todo)
  {
    this.title = todo.title;
    this.notes = todo.notes;
    this.complete = todo.complete;

    //maybe validation or casting here
    // push to server here
  }
}
