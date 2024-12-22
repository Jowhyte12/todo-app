import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="./">Home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/featuredcars/">featured cars</Link>
        </li>
      </ul>
    </nav>
  );
}
