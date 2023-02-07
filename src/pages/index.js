import Head from 'next/head'
import Nav from '../../components/navbar/index'
import Nosotros from '../../components/nosotros/index.jsx'
import Horarios from '../../components/horarios/index'
import Merch from '../../components/merch/index.jsx'
import NewsLetterSignUpForm from '../../components/contacto/index.jsx'
import Footer from '../../components/footer/index'
import style from '../styles/Home.module.css'

import Sticky from '../../components/sticky/sticky'
import Intro from '../../components/intro'

export default function Home(){
  return(
    <div className={style.global_container}>
        <Head>
          <title>NagareBjj</title>
        </Head>
        <Sticky/>
        <Intro/>
        <Nosotros/>
        <Horarios/>
        <Merch/>
        <NewsLetterSignUpForm/>
        <Footer/>
        
    </div>
  )
}