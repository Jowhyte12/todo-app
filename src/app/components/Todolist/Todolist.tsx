import { useState } from "react";
import AddTodo from "../Add Todo/AddTodo";
import "./Todolist.css";

interface AddTodo {
  title: "string";
  description: "string";
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
      createdAt: "5th september",
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

  return (
    <div>
      <ul className="todolist">
        {todolist
          .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
          .map((todo) => (
            <li key={todo.id}>
              <div className="todolistitem">
                {todo.title}

                <p>{todo.description}</p>
                <p>created on{todo.createdAt}</p>
                <p>Due On {todo.duedate} </p>
                <p>
                  {todo.isCompleted && todo.completedAt
                    ? `completed at:${new Date(
                        todo.completedAt
                      ).toLocaleString()}`
                    : ""}
                </p>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleCheckbox(todo.id)}
                />
              </div>
            </li>
          ))}
      </ul>
      <AddTodo onAddTodo={handleAddTodo} />
    </div>
  );
}
