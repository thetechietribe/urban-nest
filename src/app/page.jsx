'use client'
import Navbar from '@/components/Universal/Navbar'
import ImageSlider from '@/components/Home/ImageSlider'
import Message from '@/components/Home/Message'
import Featured from '@/components/Home/Featured'
import Transparent from '@/components/Home/Transparent'
import Demo from '@/components/Home/Demo'
import Videos from '@/components/Home/Videos'
import Join from '@/components/Universal/Join'
import Services from '@/components/Universal/Services'
import Copyright from '@/components/Universal/Copyright'

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