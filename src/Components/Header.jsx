import React from 'react'
import Card from './Card'

const Header = () => {
    return (
        <div>
            <div className='flex items-center justify-center w-full h-[100px] bg-blue-900 gap-10 z-10 relative top-0'>
                <img src="https://i.pinimg.com/736x/96/52/ba/9652ba0e8b23f4f7fe9395f328d55d61.jpg" alt="" className='w-[100px] h-[100px] bg-blend-color-dodge' />
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
                <button className='border text-white p-2 w-[150px] rounded-3xl'><a href="">Favourite Team </a></button>
            </div>
            <div className='flex items-center justify-around w-full h-[150px] bg-blue-900 border-b-2 border-white'>
                <div className='flex items-center justify-evenly gap-4 mt-6 ml-8'>
                    
                    <Card date="16 April, 00:00" leg="1st leg: 1-3" img1="https://img.uefa.com/imgml/TP/teams/logos/18x18/52683.png" name1="Aston Villa" img2="https://img.uefa.com/imgml/TP/teams/logos/18x18/52747.png" name2="Paris"/>
                    <Card date="16 April, 00:00" leg="1st leg: 1-3" img1="https://img.uefa.com/imgml/TP/teams/logos/18x18/52683.png" name1="Aston Villa" img2="https://img.uefa.com/imgml/TP/teams/logos/18x18/52747.png" name2="Paris"/>
                    <Card date="16 April, 00:00" leg="1st leg: 1-3" img1="https://img.uefa.com/imgml/TP/teams/logos/18x18/52683.png" name1="Aston Villa" img2="https://img.uefa.com/imgml/TP/teams/logos/18x18/52747.png" name2="Paris"/>
                    <Card date="16 April, 00:00" leg="1st leg: 1-3" img1="https://img.uefa.com/imgml/TP/teams/logos/18x18/52683.png" name1="Aston Villa" img2="https://img.uefa.com/imgml/TP/teams/logos/18x18/52747.png" name2="Paris"/>
                </div>
                <div>
                    <button className='p-3 w-[180px] rounded-xl border border-[#0ef] text-[#0ef]'>View All Mathes</button>
                </div>
            </div>
        </div>
    )
}

export default Header
