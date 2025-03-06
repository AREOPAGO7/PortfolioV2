import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Platforms from "./components/Platforms";
import UiTools from "./components/UiTools";
import Devops from "./components/Devops";
import Databases from "./components/Databases";
import Footer from "./components/Footer";
import Script from 'next/script'

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
   <Script id="chatbot">
    {`
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="mLVtR4SpgfvNhUxKNN0Nw";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
    `}
   </Script>
   </>
  );
}
