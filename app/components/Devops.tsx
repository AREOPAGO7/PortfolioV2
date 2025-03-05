import Image from "next/image";

const Devops = () => {
    const platforms = [
        { name: "Github Actions ", icon: "/platforms/github.svg" },
        { name: "Git version control", icon: "/platforms/git.svg" },
        { name: "Jira ", icon: "/platforms/jira.svg" },
        { name: "Jenkins ", icon: "/platforms/jenkins.svg" },
        { name: "SonarQube", icon: "/platforms/sonar.png" },
        { name: "Docker Container", icon: "/platforms/docker.svg" },
        { name: "AWS deployment  ", icon: "/platforms/amazon-aws.svg" },
        { name: "Render", icon: "/platforms/render.png" },
        { name: "Vercel deployment  ", icon: "/platforms/vercel.png" },
      
       
    ];

    return (
        <div className="py-16 px-4 bg-[#111111] mt-16 sm:mb-48 ">
            <div className="max-w-6xl mx-auto lg:flex justify-between">
                {/* Titles section */}
               <div>
               <div className="mb-12 ml-3 lg:ml-0">
                    <h2 className="sm:text-2xl text-xl font-semibold text-white mb-4">DevOps & Cloud Services</h2>
                    <p className="sm:text-[16px] text-[13px] text-white/80">
                        I use these platforms and tools to build my projects
                    </p>
                </div>

               
                <div className="lg:flex hidden flex-col lg:flex-row items-start gap-12">
                  
                    <div className="w-full lg:w-2/4 h-[100px]">
                        <div className="w-full rounded-lg">
                            <Image 
                                src="/images/cloud.png" 
                                alt="backend" 
                                className="ml-10  " 
                                width={220}
                                height={200}
                                quality={100}
                            />
                        </div>
                    </div>


                    
                </div>
               </div>
                <div className="w-full lg:w-2/4">
                        <div className="sm:ml-3 grid grid-cols-2 gap-3">
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

export default Devops; 