// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true, // Marking the component as standalone
  imports: [CommonModule, FormsModule], // Include CommonModule and FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  newTodo: string = '';
  todos: string[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo);
      this.newTodo = ''; // Clear the input after adding
    }
  }

  removeTodo(todo: string) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}