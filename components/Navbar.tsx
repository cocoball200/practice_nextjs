import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={[
            router.pathname === "/about" ? styles.active : "",
            styles.link,
          ].join(" ")}
        >
          about
        </a>
      </Link>
    </nav>
  );
}
