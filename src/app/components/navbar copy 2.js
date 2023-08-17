"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const currentRoute = usePathname();

  // styles for all links
  // const commonStyles = "px-4 py-2 rounded-lg border-2 border-red-600";
  const commonStyles = "text-xl px-4 py-2 rounded-lg navlink text-white text-xl";
  const activeStyle = commonStyles + 'bg-slate-700 text-indigo-900 font-bold';
  const nonActiveStyle = commonStyles + 'text-white';
  return (
    // <header classNameName="navbar">
    <header>
      <nav className='bg-gradient-to-b from-indigo-600 to-blue-500 inset-0 z-0 relative flex items-center min-w-screen'>
        <ul className='hidden p-4 w-full h-20 gap-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 items-center justify-between sm:flex'>
          <li className='flex gap-8 justify-between items-center rounded-lg'>
            <span className='items-center flex gap-2 flex'>
              <h1 className="text-4xl text-red-100 font-extrabold italic">
                SDS
              </h1>
            </span>
            <Link href="/dashboard" className={currentRoute === '/dashboard' ? activeStyle : nonActiveStyle}>Dashboard</Link>
            <Link href="/staff" className={currentRoute === '/staff' ? activeStyle : nonActiveStyle}>Staff</Link>
            <Link href="/category" className={currentRoute === '/category' ? activeStyle : nonActiveStyle}>Category</Link>
            <Link href="/task" className={currentRoute === '/task' ? activeStyle : nonActiveStyle}>Task</Link>
            <Link href="/projects" className={currentRoute === '/projects' ? activeStyle : nonActiveStyle}>Projects</Link>
            {/* <Link href={"/time_allocation/"+new Date().toJSON().slice(0, 10)} className={currentRoute === "/time_allocation/"+new Date().toJSON().slice(0, 10) ? activeStyle : nonActiveStyle}>Time Allocation</Link> */}
            <Link href="/" className={currentRoute === '/' ? activeStyle : nonActiveStyle}>Report</Link>
          </li>
          <li className='flex gap-1 w-fit justify-end'>
            <Link href="/" className={commonStyles}>Logout</Link>
            {/* <div className=' my-auto h-6 aspect-square rounded-full avatar'></div> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;


///////////////////////////<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossorigin="anonymous" />
<nav class="flex items-center bg-gray-800 p-3 flex-wrap">
      <a href="#" class="p-2 mr-4 inline-flex items-center">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current text-white h-8 w-8 mr-2"
        >
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          />
        </svg>
        <span class="text-xl text-white font-bold uppercase tracking-wide"
          >Talwind CSS</span
        >
      </a>
      <button
        class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <i class="material-icons">menu</i>
      </button>
      <div
        class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div
          class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
        >
          <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Home</span>
          </a>
          <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>About</span>
          </a>
          <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Services</span>
          </a>
          <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Gallery</span>
          </a>
          <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Products</span>
          </a>
          <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
