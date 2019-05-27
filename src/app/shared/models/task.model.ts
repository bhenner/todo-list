export class Task {
  id: number;
  title: string;
  note: string;

  constructor(title: string = '', note: string = '') {
    this.title = title;
    this.note = note;
  }


}
