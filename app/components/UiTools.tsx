import Image from "next/image";

const UiTools = () => {
    const platforms = [
        // { name: "Figma ", icon: "/platforms/figma.svg" },
        { name: " ShadCN Ui  ", icon: "/platforms/shadcn.png" },
        { name: "Material Ui", icon: "/platforms/mui.png" },
        // { name: "Build Tool ", icon: "/platforms/vitejs.svg" },
        { name: "Redux/RTK ", icon: "/platforms/redux.svg" },
        { name: "Zod", icon: "/platforms/zod.png" },
        { name: "Zustand", icon: "/platforms/zustand.png" },    
        { name: "Framer Motion", icon: "/platforms/motion.png" },
        { name: "GSAP animations", icon: "/platforms/gsap.png" },
        { name: "3D Three/fiber ", icon: "/platforms/three.png" },

    ];

    return (
        <div className="py-16 px-4 bg-[#111111] mt-16 ">
            <div className="max-w-6xl block lg:flex w-full mx-auto justify-between " >
                {/* Titles section */}
                <div className="">
                <div className="mb-12 md:w-[500px] ml-2 lg:ml-0">
                    <h2 className="sm:text-2xl text-xl font-semibold text-white mb-2 mx-auto">UI/UX & State Management </h2>
                    <p className="sm:text-[16px] text-[13px]  text-white/80  ">
                        For seamless and interactive user experiences.
                    </p>
                </div>

                {/* Content section */}
                <div className="hidden lg:block flex-col lg:flex-row items-start gap-12">
                    {/* Left column for image */} 
                    <div className="w-full lg:w-2/4 h-[100px]">
                        <div className="w-full  rounded-lg">
                            <Image src="/images/morty.png" alt="backend" className="   relative left-10 -top-4" width={180} height={80} />
                        </div>
                    </div>

                    {/* Right column for platforms grid */}
                    
                </div>
                </div>
                <div className="w-full lg:w-2/4  ">
                        <div className="grid grid-cols-2  gap-3">
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

export default UiTools; 