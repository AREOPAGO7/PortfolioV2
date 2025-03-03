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
        <div className="py-16 px-4 bg-[#111111] mt-16 mb-60">
            <div className="max-w-6xl mx-auto flex">
                {/* Titles section */}
               <div>
               <div className="mb-12">
                    <h2 className="text-xl font-semibold text-white mb-4">Platforms & Tools I use</h2>
                    <p className="text-xl text-white/80">
                        I use these platforms and tools to build my projects
                    </p>
                </div>

                {/* Content section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Left column for image */}
                    <div className="w-full lg:w-2/4 h-[100px]">
                        <div className="w-full  rounded-lg">
                            <Image src="/images/rickm.png" alt="backend"  className="ml-20 w-[220px] h-[300px]-mt-4" width={100} height={100} />
                        </div>
                    </div>

                    {/* Right column for platforms grid */}
                    
                </div>
               </div>
                <div className="w-full lg:w-2/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {platforms.map((platform, index) => (
                                <div
                                    key={index}
                                    className={`bg-[#282828] border border-white/10  p-4 flex items-center space-x-3 hover:bg-opacity-20 transition-all cursor-pointer`}
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