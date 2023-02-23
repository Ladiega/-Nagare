import Head from "next/head"

import Sticky from "components/sticky/sticky"
import Productos from 'components/merch/index'
import Footer from 'components/footer/index'

export default function Merch(){
    return(
        <div>
          <Head><title>NagareBjj Merch</title></Head>
					<Sticky/>
          <Productos/>  
					<Footer/>	
        </div>
    )
}