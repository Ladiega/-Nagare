import Nav from '../../components/navbar/index'
import SectionOne from 'components/sectionOne'
import About from 'components/about.jsx'
import Contact from 'components/contact'
import Footer from '../../components/footer/index'
import style from '../styles/Home.module.css'

export default function Home(){
  return(
    <div className={style.global_container}>
      
        <Nav/>
        <SectionOne/>
        <About/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}