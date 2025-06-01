import Link from "next/link"

export default function AboutUs () {
    return (
        <div className="mb-40 pt-30 ">
            <div className="contaner flex flex-col md:flex-row">
                <div className="flex flex-col justify-center  w-full mx-auto max-w-300 px-5 gap-3">
                    
                    <img src="../images/tug.jpg" alt="s" className="w-full"/>
                   <Link href={'../services/Transfer-auf-eigener-Achse'} className=""> <h1 className="font-bold text-xl xl:text-xl flex flex-row underline underline-offset-1 ">Transfer auf eigener Achse <img src="../images/link.png" alt="."  className="w-7 h-7 ml-2" /></h1></Link> 
                    <p className="text-gray-500 leading-7 xl:leading-8 xl:text-lg pb-4">Unsere Überführungsfahrer bewegen Ihr Fahrzeug auf der 
                     Straße vom Abhol- zum Zustellort. Unsere professionellen Fahrer besitzen langjährige Fahrpraxis, sind pünktlich und diskret.</p>
                    <button></button>
                </div>
                <div className="flex flex-col justify-center w-full mx-auto max-w-300 px-5 gap-3">
                    
                    <img src="../images/tug.jpg" alt="s" className="w-full"/>
                   <Link href={'../services/transport-auf-dem-anhanger'} className=""> <h1 className="font-bold  text-xl xl:text-xl flex flex-row underline underline-offset-1 ">Überführung ohne Zulassung möglich <img src="../images/link.png" alt="."  className="w-7 h-7 ml-2" /></h1></Link> 
                    <p className="text-gray-500 leading-7 xl:leading-8 xl:text-lg pb-4">Für Personen, die z.B. ihr Auto nicht am Wohnort kaufen, ermöglichen wir auch ohne Zulassung eine zuve
                        rlässige Überführung mit Hilfe eines Kurzzeit-, bzw. Überführungskennzeichen.</p>
                    <button></button>
                </div>
                <div className="flex flex-col justify-center  mx-auto w-full max-w-300 px-5 gap-3">
                    
                    <img src="../images/tug.jpg" alt="s" className="w-full"/>
                   <Link href={'../services/transport-auf-dem-anhanger'} className=""> <h1 className="font-bold  text-xl xl:text-xl flex flex-row underline underline-offset-1 ">Transport auf dem Anhänger <img src="../images/link.png" alt="."  className="w-7 h-7 ml-2" /></h1></Link> 
                    <p className="text-gray-500 leading-7 xl:leading-7 xl:text-lg pb-4">Sicherer Transport mit Spezialanhänger – ideal für defekte, nicht zugelassene oder hochwertige Fahrzeuge. Unsere Fahrer liefern pünktlich, diskret und zuverlässig.

</p>
                    <button></button>
                </div>
            </div>
        </div>
    )
}