import { useState } from "react";
import "./AddTodo.css";

interface AddTodoProps {
  onAddTodo: (todo: {
    title: string;
    description: string;
    duedate: string;
    
  }) => void;
}

export default function AddTodo({ onAddTodo }: AddTodoProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDuedate] = useState("");

  return (
    
    <div className="add-todo-container">
      <div className="center">
      <p className="add-todo-title">Add Todo</p>
      <label className="add-todo-label">Title</label>
      <input
        type="text"
        className="add-todo-title-input"
        value={title}
        onChange={function (event) {
          setTitle(event.target.value);
        }}
      />
      <label className="add-todo-label">Description</label>
      <textarea
        className="add-todo-title-input"
        value={description}
        onChange={function (event) {
          setDescription(event.target.value);
        }}
        placeholder="Enter description"
      />
      <label className="add-todo-label">Due date</label>
      <input
        className="add-todo-title-input"
        type="datetime-local"
        id="meeting-time"
        value={duedate}
        onChange={function (event) {
          setDuedate(event.target.value);
        }}
        placeholder="due date"
      />

      <button
        id="toggle"
        className="add-todo-button"
        onClick={function () {
          if (title.trim() && description.trim && duedate.trim()) {
            onAddTodo({ title, description, duedate });
            setTitle("");
            setDescription("");
            setDuedate("");
          }
        }}
      >
        Add Todo
      </button>

    </div>
    </div>
  
  );
}
