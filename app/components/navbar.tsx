export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">MyNextApp</h1>

      <ul className="flex space-x-6 text-lg">
        <li><a href="/" className="hover:text-black-600">Home</a></li>
        <li><a href="/about" className="hover:text-black-600">About</a></li>
        <li><a href="/contact" className="hover:text-black-600">Contact</a></li>
      </ul>
    </nav>
  );
}
