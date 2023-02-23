import Sticky from "components/sticky/sticky"
import Productos from 'components/merch/index'
import Footer from 'components/footer/index'

export default function Merch(){
    return(
        <div>
					<Sticky/>
          <Productos/>  
					<Footer/>	
        </div>
    )
}