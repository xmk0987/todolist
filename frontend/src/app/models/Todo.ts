export class Todo {
    id!: number;
    userId!: number;
    content: string = "";
    completed: boolean = false;
    pinned: boolean = false;
    editing: boolean = false;
}