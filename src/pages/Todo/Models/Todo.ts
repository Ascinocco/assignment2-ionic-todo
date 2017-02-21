/**
 * Todo.ts
 * Anthony Scinocco 200271982
 * Handles modeling a Todo. Not really transferable to Firebase observable object type
 * Also contains some presentation logic
 */

export class Todo
{
  public title: string;
  public notes: string;
  public complete: boolean;
  public show: boolean;

  /**
   * I can remove notes from the constructor after done mocking
   * @param  {string} title [description]
   * @param  {string} notes [description]
   * @return {[type]}       [description]
   */
  constructor(title: string, notes?: string, show?: boolean)
  {
    if (notes) {
      this.notes = notes;
    } else {
      this.notes = "";
    }

    if (show) {
      this.show = show;
    } else {
      this.show = false;
    }

    this.title = title;
    this.complete = false;
  }
}
