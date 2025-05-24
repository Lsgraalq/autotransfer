import Image from "next/image";
import Navbar from '../../components/navbar'

export default function Home() {
  return ( <>
      <Navbar></Navbar> 
      <main className="pt-35 ">
        <div className="flex flex-col-reverse md:flex-row items-center gap-0">
          <div className="w-full md:w-1/2">
            <h1 className="md:text-6xl text-3xl font-bold text-center sm:text-left pl-10  ">
          Europaweiter Autotransfer
          pünktlich, professionell
            </h1>
            <h2 className="text-gray-500 pl-10 pt-5">
              Wir überführen alle Fahrzeugtypen: Pkw, Transporter, Oldtimer und Luxuskarossen von Tür zu Tür, in ganz Europa
            </h2>
          </div>
          <div className="md:w-1/2 w-full justify-center flex p-10 ">
              <Image
              className="rounded-4xl w-full "
              src="/images/herosection.jpg"
              alt="IMAGE"
              width={900}
              height={1200}
              /> 
          </div>
        </div>
      </main>
      </>
  );
}
