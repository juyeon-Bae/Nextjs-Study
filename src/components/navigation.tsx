"use client"
import Link from "next/link" //백엔드에서 render되고 프론트에서 hydrate됨
import styles from "../app/styles/navigation.module.css"
import { usePathname } from "next/navigation"
import { useState } from "react";
export default function Navigation() {
    const path = usePathname();
    const [count, setCount] = useState(0)

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <Link href="/">Home</Link>{path === "/" ? "📌" : ""}
                </li>
                <li><Link href="/about-us">about Us</Link> {path === "/about-us" ? "💡" : ""}</li>
                {/* <li><button onClick={() => setCount(c => c + 1)}>{count}</button></li> */}
            </ul>
        </nav>
    )
}