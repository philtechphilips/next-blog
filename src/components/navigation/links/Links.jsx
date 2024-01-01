"use client"
import styles from "./links.module.css";
import NavLink from './navLink/navLink';
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const links = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Contact",
    path: "/contact"
  },
  {
    title: "Blog",
    path: "/blog"
  },
]


const Links = () => {
  const [isOpen, setisOpen] = useState(false);
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <i className={`ri-menu-line ${styles.menuButton}`} onClick={() => setisOpen((prev) => !prev)}></i>
      {
        isOpen && <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title}></NavLink>
          ))}
        </div>
      }
    </div>
  )
}

export default Links
