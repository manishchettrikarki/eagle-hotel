import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
