export class Task {
  id: number;
  title: string;
  note: string;

  constructor(title: string = '', note: string = '', id: number = null) {
    this.title = title;
    this.note = note;
    this.id = id;
  }
}
