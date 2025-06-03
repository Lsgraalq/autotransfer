import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import Link from "next/link"


export default function KontaktPage () {
    return (<>
        <Navbar></Navbar>
        <section className="pt-60 pb-45">
            <div className="contaner flex flex-col items-center justify-center">
                <div className="flex flex-col gap-10 text-center">
                    <h1 className="font-bold  text-xl xl:text-4xl flex flex-row underline underline-offset-1 mx-auto ">Nehmen Sie Kontakt mit uns auf</h1>
                    <p className="text-gray-500 leading-7 xl:leading-8 xl:text-lg pb-4  ">Sie haben Fragen zur unseren Leistungen? Zögern Sie nicht und treten Sie mit uns in Kontakt.
Sie können uns telefonisch mit den unten stehenden Telefonnummern oder über unser Kontaktformular erreichen.</p>
                    <div className="btn-container text justify-center md:block  flex pt-12">
                        <Link href={'/form'} className="">
                            <button className="btn-effect-18 uppercase font-bold">
                               Zum Kontaktformular
                            </button>
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="contaner flex flex-row"></div>
        </section>
        <Footer></Footer>
        </>
    )
}