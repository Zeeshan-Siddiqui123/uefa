import React from 'react'
import Card from './Card'
import Toggle from './Drawer'
import '../App.css'

// import { Pagination } from 'swiper/modules';


const Header = () => {
    return (
        <div>
            <div className='flex items-center justify-center w-full h-[100px] bg-blue-900 gap-10 z-10 relative top-0'>
                <img src="https://img.uefa.com/imgml/uefacom/ucl/2024/logos/logo_dark.svg" alt="" className='w-[80px] h-[80px] bg-blend-color-dodge' />
                <div className='nav-linkk flex -items-center justify-center gap-5'>
                    <a href="" className='text-xl text-white'>Mathes</a>
                    <a href="" className='text-xl text-white'>UEFA.TV</a>
                    <a href="" className='text-xl text-white'>Table</a>
                    <a href="" className='text-xl text-white'>Gaming</a>
                    <a href="" className='text-xl text-white'>Stats</a>
                    <a href="" className='text-xl text-white'>Team</a>
                    <a href="" className='text-xl text-white'>New Format</a>
                    <a href="" className='text-xl text-white'>New</a>
                    <a href="" className='text-xl text-white'>Final</a>
                    <a href="" className='text-xl text-white'>More</a>
                </div>
                <div className='flex items-center gap-2'
                >
                    <button className='border text-white p-2 w-[150px] rounded-3xl'><a href="">Favourite Team </a></button>
                    <div className='toggle max-sm:mr-2'>
                        <Toggle />
                    </div>
                </div>

            </div>
            <div className='flex items-center justify-around flex-wrap w-full gap-2 p-2  bg-blue-900 border-b-2 border-white'>
            
                <div className='flex items-center flex-wrap justify-center gap-4 mt-6 ml-8'>
                
                            <Card
                                date="16 April, 00:00"
                                leg="1st leg: 1-3"
                                img1="https://img.uefa.com/imgml/TP/teams/logos/18x18/52683.png"
                                name1="Aston Villa"
                                img2="https://img.uefa.com/imgml/TP/teams/logos/18x18/52747.png"
                                name2="Paris" />
                        
                            <Card
                                date="16 April, 00:00"
                                leg="1st leg: 1-3"
                                img1="https://img.uefa.com/imgml/TP/teams/logos/18x18/52683.png"
                                name1="Aston Villa"
                                img2="https://img.uefa.com/imgml/TP/teams/logos/18x18/52747.png"
                                name2="Paris" />
                        
                            <Card
                                date="16 April, 00:00"
                                leg="1st leg: 1-3"
                                img1="https://img.uefa.com/imgml/TP/teams/logos/18x18/52683.png"
                                name1="Aston Villa"
                                img2="https://img.uefa.com/imgml/TP/teams/logos/18x18/52747.png"
                                name2="Paris" />
                
                            <Card
                                date="16 April, 00:00"
                                leg="1st leg: 1-3"
                                img1="https://img.uefa.com/imgml/TP/teams/logos/18x18/52683.png"
                                name1="Aston Villa"
                                img2="https://img.uefa.com/imgml/TP/teams/logos/18x18/52747.png"
                                name2="Paris" />
                        
                        
                </div>
                <div>
                    <button className='p-3 w-[180px] rounded-xl border border-[#0ef] text-[#0ef]'>View All Mathes</button>
                </div>
            </div>
            
        </div>
        
    )
}

export default Header
