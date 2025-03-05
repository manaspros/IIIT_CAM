const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b-2 border-purple-500">
      <div className="flex items-center gap-3 justify-center">
        <img src="/IIITNR-Logo.png" alt="IIIT Logo" className="h-13" />
        <h1 className="text-2xl font-bold text-blue-800">CAM</h1>
      </div>
      <nav>
        <ul className="flex gap-6 text-blue-700">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Academics</li>
          <li className="hover:underline cursor-pointer">Research</li>
          <li className="hover:underline cursor-pointer">People</li>
          <li className="hover:underline cursor-pointer">Events</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
