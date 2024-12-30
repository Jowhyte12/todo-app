"use client";
import { useState, useRef } from "react";
import AddTodo from "../Add Todo/AddTodo";
import "./Todolist.css";
import { MdDelete } from "react-icons/md";



interface AddTodo {
  title: "string";
  description: "string";
  duedate: "string";
}

export default function Todolist() {
  const [todolist, setTodolist] = useState([
    {
      id: 0,
      title: "Do groceries",
      description: "clothes",
      duedate: "5th june",
      isCompleted: false,
      completedAt: null,
      createdAt: new Date().toISOString(),
    },
    {
      id: 1,
      title: "Milk the cows",
      description: "All of them",
      duedate: "8th june",
      isCompleted: false,
      completedAt: null,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Bathe the kids",
      description: "Sally",
      duedate: "9th june",
      isCompleted: true,
      completedAt: "12/21/2024",
      createdAt: new Date().toISOString(),
    },
  ]);

  const handleCheckbox = (id: number) => {
    const newTodolist = todolist.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          title: todo.title,
          description: todo.description,
          duedate: todo.duedate,
          isCompleted: !todo.isCompleted,
          completedAt: !todo.isCompleted ? new Date().toISOString() : null,
          createdAt: todo.createdAt,
        };
      }

      return todo;
    });

    setTodolist(newTodolist);
  };

  const handleAddTodo = (todo: {
    title: string;
    description: string;
    duedate: string;
  }) => {
    const newTodolist = todolist.map((todo) => todo);
    newTodolist.push({
      id: todolist.length,
      title: todo.title,
      description: todo.description,
      duedate: todo.duedate,
      isCompleted: false,
      completedAt: null,
      createdAt: new Date().toISOString(),
    });
    setTodolist(newTodolist);
  };
  const handleDelete = (id: number) => {
    const newTodolist = todolist.filter((todo) => todo.id !== id);
    setTodolist(newTodolist);
  };

  const dialogRef = useRef<HTMLDialogElement>(null);
  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open");
    dialogRef.current.close();
    dialogRef.current.showModal();
  }
  function closeModal() {
    dialogRef.current?.close();
  }
  return (
    <div>
      <div>
        <h1 className="head">
          <button onClick={toggleDialog}><p className="top">Todolist</p></button>
          <dialog ref={dialogRef}>
            <div className="cover">
              <AddTodo onAddTodo={handleAddTodo} />
            </div>
            <button className="but" onClick={closeModal}>
              <span className="sr-only">
                <div className="w-4 h-4">x</div>
              </span>
            </button>
          </dialog>
        </h1>
      </div>
      
      <div className="todo-row">
      <ul className="todolist">
        {todolist
          .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
          .map((todo) => (
            <li key={todo.id}>
              <div className="todolistitem">
                <p className="foo">{todo.title}</p>

              <p>{todo.description}</p>
                <p>created on{todo.createdAt}</p>
                <p>Due On {todo.duedate} </p>
                <p className="created">
                  {todo.isCompleted && todo.completedAt
                    ? `completed at:${new Date().toLocaleString()}`
                    : ""}
                </p>
                <p>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleCheckbox(todo.id)}
                />
              </p>
                  
             
            
              </div>
              <button onClick={() => handleDelete(todo.id)}><MdDelete/></button>
            </li>
          ))}
         
      </ul>
      
      </div>
      
  
    </div>
  );
}
