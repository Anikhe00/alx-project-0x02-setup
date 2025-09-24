import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-purple-200 text-gray-800 p-4">
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
