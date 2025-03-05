import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Platforms from "./components/Platforms";
import UiTools from "./components/UiTools";
import Devops from "./components/Devops";
import Databases from "./components/Databases";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <>
    <Navbar/>
   <div className="lg:w-[1000px] mx-auto bg-[#111111] border-b-[1px] border-white/10">
      <Skills/>
      <Projects/>
      <UiTools/>
      <Databases/>
      <Devops/>
      <Platforms/>  
   </div>
   <Footer/>
   </>
  );
}
