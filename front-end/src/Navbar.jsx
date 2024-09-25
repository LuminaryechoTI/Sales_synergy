function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex justify-between px-4 py-2">
        <li className="text-xl font-bold">SYNERGY</li>
        <li className="flex space-x-4">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/sales" className="hover:text-blue-500">Sales</a>
          <a href="/quicksale" className="hover:text-blue-500">Quicksale</a>
          <a href="/about" className="hover:text-blue-500">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;