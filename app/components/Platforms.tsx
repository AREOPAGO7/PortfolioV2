import Image from "next/image";

const Platforms = () => {
    const platforms = [
        { name: "Firebase ", icon: "/platforms/firebase.svg" },
        { name: "Supabase ", icon: "/platforms/supabase.png" },
        { name: "Docker Container", icon: "/platforms/docker.svg" },
        { name: "Vercel deployment  ", icon: "/platforms/vercel.png" },
        { name: "Git version control", icon: "/platforms/git.svg" },
        { name: "Clerk Auth", icon: "/platforms/clerk.png" },
       
    ];

    return (
        <div className="py-16 px-4 bg-[#111111] mt-16 mb-20 ">
            <div className="max-w-6xl mx-auto block lg:flex justify-between ">
                {/* Titles section */}
               <div className="">
               <div className="mb-12 ml-3 lg:ml-0">
                    <h2 className="sm:text-3xl text-xl font-semibold text-white mb-2">Platforms & Tools I use</h2>
                    <p className="sm:text-[16px] text-[13px] text-white/80 ">
                        Auth and backend services, deployment <br />
                        and version control. 
                    </p>
                </div>

                {/* Content section */}
                <div className="lg:flex hidden flex-col lg:flex-row items-start gap-12">
                    {/* Left column for image */}
                    <div className="w-full lg:w-2/4 h-[100px]">
                        <div className="w-full rounded-lg">
                            <Image 
                                src="/images/rickm.png" 
                                alt="backend"  
                                className="ml-20 w-[220px] h-[220px] -mt-4" 
                                width={220}
                                height={220} 
                                
                            />
                        </div>
                    </div>

                    {/* Right column for platforms grid */}
                    
                </div>
               </div>
                <div className="w-full sm:pl-3 lg:w-2/4">
                        <div className="grid grid-cols-2 gap-3">
                            {platforms.map((platform, index) => (
                                <div
                                    key={index}
                                    className={`bg-[#282828] border border-white/10 text-[12px] sm:text-md p-4 flex items-center space-x-3 hover:bg-opacity-20 transition-all cursor-pointer`}
                                >
                                    <div className="w-6 h-6 relative">
                                        <Image
                                            src={platform.icon}
                                            alt={platform.name}
                                        
                                            className="object-contain"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <span className="text-white/90">{platform.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Platforms; 