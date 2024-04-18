import './styles.css'
import './responsive.css'
import Navbar from '@/components/Navbar'
import ImageSlider from '@/components/ImageSlider'
import Message from '@/components/Message'
import Featured from '@/components/Featured'
import Transparent from '@/components/Transparent'
import Demo from '@/components/Demo'
import Videos from '@/components/Videos'
import Join from '@/components/Join'
import Services from '@/components/Services'
import Copyright from '@/components/Copyright'

export default function Homepage(){

    return(
        <>
        <Navbar/>
        <div className="wrapper">
        <ImageSlider/>
        <Message/>
        <Featured/> 
        </div>
        <Transparent/>
        <div className="wrapper">
        <Demo/>
        <Videos/>
        <Join/>
        <Services/>
        <Copyright/>
        </div>
        </>
    )
};