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
        <div className="py-16 px-4 bg-[#111111] mt-16 mb-60">
            <div className="max-w-6xl mx-auto flex">
                {/* Titles section */}
               <div>
               <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-white mb-4">Databases & ORMs</h2>
                    <p className="text-xl text-white/80">
                       Efficient databases and ORMs for optimal performance
                    </p>
                </div>

                {/* Content section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Left column for image */}
                    <div className="w-full lg:w-2/4 h-[100px]">
                        <div className="w-full  rounded-lg">
                            <Image src="/images/rickm.png" alt="backend" className="ml-20 w-[220px] h-[300px]-mt-4" width={100} height={100} />
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

export default Databases; 