import Image from "next/image";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Platforms from "./components/Platforms";
import UiTools from "./components/UiTools";
import Devops from "./components/Devops";
import Databases from "./components/Databases";
export default function Home() {
  return (
   <>
    <Navbar/>
   <div className="w-[1000px] mx-auto bg-[#111111]">
      <Skills/>
      <Projects/>
      <UiTools/>
      <Databases/>
      <Platforms/>  
      <Devops/>
   </div>
   </>
  );
}
