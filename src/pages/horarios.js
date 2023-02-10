import Sticky from "components/sticky/sticky"
import Footer from 'components/footer/index'
import style from '../styles/Home.module.css'
export default function Horarios(){
    return(
        <div className={style.global_contaner}>
            <Sticky/>
            Horarios
            
            <Footer/>

        </div>
    )
}