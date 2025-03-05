import Image from "next/image";

const Databases = () => {
    const platforms = [
        { name: "MySQL ", icon: "/mysql.svg" },
        { name: "PostgreSql ", icon: "/postgresql.svg" },
        { name: "MongoDB", icon: "/mongodb.svg" },
        { name: "Cassandra  ", icon: "/cassandra.svg" },
        { name: "Drizzle ORM", icon: "/drizzle.png" },
        { name: "Prisma ORM", icon: "/prisma.png" },
       
    ];

    return (
        <div className="py-16 px-4 bg-[#111111] mt-16 mb-14 ">
            <div className="max-w-6xl  block lg:flex">
                {/* Titles section */}
               <div className="">
               <div className="mb-12 m-auto ml-3 lg:ml-0">
                    <h2 className="sm:text-2xl text-xl font-semibold text-white mb-2 ">Databases & ORMs</h2>
                    <p className="sm:text-[16px] text-[13px] text-white/80 mr-14 w-full">
                       Efficient databases and ORMs for optimal performance.
                    </p>
                </div>

                {/* Content section */}
                <div className="lg:flex hidden flex-col lg:flex-row items-start gap-12">
                    {/* Left column for image */}
                    <div className="w-full lg:w-2/4 h-[100px]">
                        <div className="w-full  rounded-lg">
                            <Image src="/images/gun.png" alt="backend" className="ml-10 -mt-4" width={180} height={300} />
                        </div>
                    </div>

                    {/* Right column for platforms grid */}
                    
                </div>
               </div>
                <div className="w-full lg:w-2/4">
                        <div className="sm:ml-2 grid grid-cols-2 gap-3">
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

export default Databases; 