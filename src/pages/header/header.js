import Image from "next/image";
import Link from 'next/link';
import "../../app/globals.css";
export default function Header() {
  return (
    <main>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link href="/" className="nav-link" passHref>
      Home
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/about"  className="nav-link" passHref>
         About
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/what-we-do"  className="nav-link" passHref>
          What we do
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/blog" className="nav-link"  passHref>
         Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/contact" className="nav-link" passHref>
         Contact Us
        </Link>
      </li>
    </ul>
  </main>
  );
}
