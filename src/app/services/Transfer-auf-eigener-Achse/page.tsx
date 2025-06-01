import Navbar from "../../../../components/navbar"
import Footer from "../../../../components/footer"
import Link from "next/link"


export default function Page() {


  return(
    <>
    
    <div className="gap-20 flex flex-col">
      <Navbar></Navbar>
      <div className="contaner pt-30">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-20 p-5">
            <img src="../images/tug.jpg" alt="asd" />
            <div className="flex flex-col gap-20 p-5">
                <h2 className="text-3xl font-bold">Fahrzeugüberführung auf eigener Achse</h2>
                <div className="text-lg leading-8 text-gray-400">Fahrzeugüberführung auf eigener Achse
    Unsere erfahrenen Überführungsfahrer transportieren Ihr Fahrzeug sicher und zuverlässig vom Abhol- zum Zielort - direkt auf eigener Achse, also auf eigener Fahrt. Dabei wird das Fahrzeug ohne Anhänger oder zusätzliche Transportmittel bewegt.

    Dieser Service ist ideal für Fahrzeuge, die zugelassen und fahrbereit sind. Egal ob es sich um einen privaten PKW, ein Leasingfahrzeug oder ein Firmenauto handelt - wir sorgen dafür, dass es pünktlich und in bestem Zustand ankommt.

    Unsere Fahrer verfügen über langjährige Erfahrung im Straßenverkehr, sind zuverlässig, pünktlich und arbeiten diskret. Während der Überführung achten wir auf eine schonende Fahrweise und den verantwortungsvollen Umgang mit Ihrem Fahrzeug.

    Wir übernehmen für Sie die gesamte Organisation - von der Abholung bis zur Übergabe - damit Sie sich um nichts kümmern müssen.
                </div>
            </div>
            
          </div>
          
          <div className="flex justify-center">
              <Link href={'/form'} className="flex justify-center md:w-90 w-60">
                <button className="btn-effect-18 uppercase font-bold leading-5  md:leading-8">
                  Unverbindlich  &nbsp;   anfragen
                </button>
              </Link> 
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    
    </>
  ) 
}
