import './styles.css'
import './responsive.css'
import Navbar from '@/components/Navbar'
import ImageSlider from '@/components/ImageSlider'
import Message from '@/components/Message'
import Featured from '@/components/Featured'

export default function Homepage(){

    return(
        <>
        <Navbar/>
        <ImageSlider/>
        <Message/>
        <Featured/>
        </>
    )
};