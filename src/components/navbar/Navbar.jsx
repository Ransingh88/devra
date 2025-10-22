import React from "react"
import { Link, NavLink } from "react-router"

const Navbar = () => {
  const navbarMenu = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Our Stuff",
      path: "/our-stuff",
    },
    {
      label: "Who We Are",
      path: "/who-we-are",
    },
    {
      label: "Get Support",
      path: "/get-support",
    },
  ]
  return (
    <div className="h-24 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="w-full h-full flex justify-between items-center container mx-auto ">
        <div>
          <Link to="/">
            <h3 className="font-bold tracking-tighter text-lg cursor-pointer">
              Devra<span className="text-blue-500">.</span>
            </h3>
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8 text-sm font-medium">
            {navbarMenu.map((item) => (
              <NavLink to={item.path} className={({ isActive }) => (isActive ? "text-blue-500 " : "")}>
                <li>{item.label}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-blue-500 text-gray-50 capitalize px-4 hover:bg-blue-600 py-2 rounded-lg cursor-pointer">login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
