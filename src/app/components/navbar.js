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
            <Link href="/projects" className={currentRoute === '/projects' ? activeStyle : nonActiveStyle}>Projects</Link>
            <Link href={"/time_allocation/"+new Date().toJSON().slice(0, 10)} className={currentRoute === "/time_allocation/"+new Date().toJSON().slice(0, 10) ? activeStyle : nonActiveStyle}>Time Allocation</Link>
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
