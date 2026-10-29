import "./Header.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <Link href="/">Home</Link>
            <nav>
                <Link href="/products">Products</Link>
                <Link href="/sales">Sales</Link>
            </nav>
        </header>
    );
}