import { FaGithub, FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="ml-10 text-gray-300 py-8 px-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold flex items-center space-x-2">
            <span className=""> Anass Kalkhi</span>
          </h2>
          <p className="text-sm text-gray-400">Anass Kalkhi © 2025 . All rights reserved.</p>
          <div className="flex space-x-4 mt-3">
            <FaGithub className="text-gray-400 hover:text-white text-xl cursor-pointer" />
            <FaDiscord className="text-gray-400 hover:text-white text-xl cursor-pointer" />
            <FaXTwitter className="text-gray-400 hover:text-white text-xl cursor-pointer" />
          </div>
        </div>

      
        <div className="grid grid-cols-3 gap-8 text-sm">
         
          <div>
            <h3 className="text-gray-400 font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Web Development</li>
              <li className="hover:underline cursor-pointer">UI/UX Design</li>
              <li className="hover:underline cursor-pointer">Consulting</li>
              <li className="hover:underline cursor-pointer"></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-gray-400 font-semibold mb-2">Contact</h3>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Email Me </li>
              <li className="hover:underline cursor-pointer">Schedule Call</li>
              <li className="hover:underline cursor-pointer">Resume</li>

            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Projects</li>
              <li className="hover:underline cursor-pointer">About</li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
