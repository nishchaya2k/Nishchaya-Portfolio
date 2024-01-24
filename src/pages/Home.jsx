import React from 'react'
import Navbar from '../components/Navbar'
import Description from '../components/Description'



const Home = () => {
    return (
        <div className='w-full bg-white xl:rounded-[70px] xl:my-16 xl:mx-24 p-2'>
            <Navbar />
            <Description />
        </div>
    )
}

export default Home
