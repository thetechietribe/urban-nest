import Navbar from '@/components/Navbar'
import './styles.css'
import About1 from '@/components/About1'
import About2 from '@/components/About2'
import About3 from '@/components/About3'
import About4 from '@/components/About4'
import About5 from '@/components/About5'
import Join from '@/components/Join'
import Services from '@/components/Services'
import Copyright from '@/components/Copyright'

export default function AboutPage(){
    
    return(
        <>
        <Navbar/>
        <About1/>
        <About2/>
        <About3/>
        <About4/>
        <About5/>
        <Join/>
        <Services/>
        <Copyright/>
        </>
    )
};