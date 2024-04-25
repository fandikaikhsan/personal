export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-900 bg-opacity-75 w-full backdrop-blur-lg p-5">
      <div className="flex flex-row justify-center items-center gap-5">
        <a href="#" className="text-sm font-thin uppercase">
          Projects
        </a>
        <a href="#" className="text-sm font-thin uppercase">
          Contact
        </a>
        <a href="#" className="text-sm font-thin uppercase">
          About
        </a>
      </div>
    </nav>
  )
}
