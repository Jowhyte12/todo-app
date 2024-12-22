"use client";
import Navbar from "./components/Navbar/Navbar";
import "./page.css";
import Todolist from "./components/Todolist/Todolist";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Todo list</h1>
        <Todolist/>
       
      </div>
    </div>
  );
}
