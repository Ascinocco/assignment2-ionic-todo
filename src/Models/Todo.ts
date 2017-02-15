export class Todo
{
  public title: string;
  public notes: string;
  public id: string;
  public complete: boolean;

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
}
