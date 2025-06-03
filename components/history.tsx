import Link from "next/link"

export default function History () {
    return (
        <section className="pt-35 pb-25 panel px-5">
            <div className="contaner grid grid-cols-10 w-full bg-[#EEEEEE] rounded-[40]">
                    <div className="lg:col-span-3 justify-start flex flex-col xl:gap-19 2xl:gap-23 lg:gap-10 p-5  gap-3 order-2 lg:order-1 col-span-10">
                        <h1 className="font-bold text-xl pt-6">AUTOTRANSFER</h1>
                        
                        <p className="text-gray-500 leading-7 xl:leading-8  xl:text-base 2xl:tetx-lg ">Seit 2005 bringt autotransfer24 frischen Wind in die Transferbranche. Ein erfahrenes Team aus Miet- und Transferprofis bietet seither zuverlässigen Service und fundiertes Fachwissen.</p>
                        <div className="btn-container text justify-center lg:block  flex  ">
                                <Link href={'/about'} className="">
                                    <button className="btn-effect-18 uppercase font-bold">
                                    read more
                                    </button>
                                </Link> 
                        </div>
                    
                    
                    </div>
                    <div className="lg:col-span-7  w-full h-[500] order-1 lg:order-2 col-span-10"> <video
      className="w-full h-full object-cover  lg:rounded-tr-[40] lg:rounded-br-[40] rounded-t-[40] lg:rounded-tl-none bg-white"
      autoPlay
      muted
      loop
      playsInline
      src="/images/timeline.mp4" // заменишь на своё видео
    /></div>
                    
                    </div>
        </section>
    )
}

