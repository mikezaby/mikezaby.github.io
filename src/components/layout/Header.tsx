import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center bg-gray-100 py-4 dark:bg-gray-800">
      <div className="container flex items-center items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          <Link href="/">Michalis Zabaras</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/about"
                className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
