import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { MoonIcon } from '@heroicons/react/24/outline'
import { FaLinkedin } from 'react-icons/fa6'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#111111] z-50 border-b-[1px] border-white/10 font-poppins">
        <div className="w-[70%] mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full ">
          
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                className="h-6 w-auto "
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
           <p className='text-[#e2e3e6] font-semibold ' > Anass</p>
          </div>

          {/* Navigation Links */}
          <div className="ml-10 hidden md:block border border-white/10 p-3 rounded-full">
            <div className="flex items-center space-x-10 justify-center px-10 font-semibold text-sm">
              <Link
                href="/get-started"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/documentation"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Skills
              </Link>
              <Link
                href="/studio"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
               About
              </Link>
              
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-2">
           
           <div className='border  border-white/10 p-2 rounded-lg'>
           <a
              href="https://github.com/drizzle-team/drizzle-orm"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <FaGithub className="h-5 w-5" />
             
            </a>
           </div>
           <div className='border  border-white/10 p-2 rounded-lg'>
           <a
              href="https://github.com/drizzle-team/drizzle-orm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
             
            </a>
           </div>
           <div className='border  border-white/10 p-[6px] px-2 rounded-lg'>
           <button className="">
              <MoonIcon className="h-5 -mb-1" />
              
            </button>
           </div>

           

           
          </div>
        </div>
      </div>
    </nav>
  )
}
