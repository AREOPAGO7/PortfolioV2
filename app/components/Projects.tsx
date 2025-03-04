import Image from "next/image";
const Projects = () => {
    return (
        <div className="bg-[#111111] xl:w-[1000px]  w-full mx-auto">
            <div className="hover: cursor-pointer group flex items-center">
                <h2 className="text-xl text-white/70 font-semibold mb-8 sm:ml-6 ml-12 ">Recent Projects</h2>
                <p className="text-white/40 ml-3 text-sm font-semibold hidden group-hover:block -mt-8 transition-transform duration-300 group-hover:translate-x-2 opacity-0 group-hover:opacity-100">see all</p>
                <i className="bx bx-right-arrow-alt text-white/40 -mt-8 text-xl opacity-0 group-hover:opacity-100 transition-transform duration-300 group-hover:translate-x-2"></i>
            </div>
            <section className=" relative">


                <div className="md:block hidden absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none z-10" />
                <div className="md:block hidden absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none z-10" />


                <div className="flex justify-center items-center">
                    <div className="md:flex gap-4 w-full max-w-[1000px] relative">
                        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none z-10" />

                        <div className="md:block hidden bg-zinc-900 md:h-[253px] rounded-lg overflow-hidden w-20">
                            <div className="relative h-[150px]  w-18 rounded-lg overflow-hidden bg-black/20 mt-2">
                            </div>
                            <div className="p-4">
                            </div>
                        </div>

                        {/* Other project cards */}
                        <div className="bg-zinc-900 rounded-lg overflow-hidden md:w-[290px] w-[340px]  mx-auto mb-6">
                            <div className="relative  h-[200px] md:h-[150px] rounded-lg overflow-hidden ">
                                <Image src="/projects/whispr.png" alt="Project 1" fill className="object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium mb-2">Whispr</h3>
                                <p className="text-[12px] text-gray-400">A social media platform for sharing thoughts and ideas.</p>
                            </div>
                        </div>

                        <div className="bg-zinc-900 rounded-lg overflow-hidden md:w-[290px] w-[340px] mb-6 mx-auto">
                            <div className="relative h-[230px] md:h-[150px] rounded-lg overflow-hidden bg-zinc-900">
                                <Image src="/projects/ai.png" alt="Project 1" fill className="object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium mb-2">AI Chatbot</h3>
                                <p className="text-[12px] text-gray-400">A chatbot that uses AI to answer questions.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-900 rounded-lg overflow-hidden md:w-[290px] w-[340px] mb-6 mx-auto">
                            <div className="relative h-[230px] md:h-[150px] rounded-lg overflow-hidden bg-zinc-900">
                                <Image src="/projects/hospital.png" alt="Project 1" fill className="object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium mb-2">Dashboard</h3>
                                <p className="text-[12px] text-gray-400">Hospital Management System</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Projects;