"use client"
import styles from "./links.module.css";
import NavLink from './navLink/navLink';
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import { handleLogout } from "@/lib/action";

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


const Links = ({session}) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
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
