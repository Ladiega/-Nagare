import Head from "next/head"

import Sticky from "components/sticky/sticky"
import Info from "../../components/info/index"
import NewsLetterSignUpForm from "components/contacto"
import Footer from "components/footer/index"

export default function Contacto(){
    return(
        <div>
					<Head><title>NagareBjj Contacto</title></Head>
					<Sticky/>
					<Info/>
					<NewsLetterSignUpForm/>
					<Footer/>
				</div>
    )
}