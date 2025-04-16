import React from 'react'
import '../App.css'
import PlayerImg from './PlayerImg'
import { Card2 } from './Card'
import Table from './Table'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    const Arrow1 = "<"
    const Arrow2 = ">"
    const highlightsData = [
        {
            img: "https://editorial.uefa.com/resources/0298-1d7b90e83e2b-a1925c409d53-1000/format/wide1/paris_saint-germain_v_aston_villa_fc_-_uefa_champions_league_2024_25_quarter_final_first_leg.jpeg?imwidth=369",
            img2: "https://editorial.uefa.com/resources/0298-1d7ee5183412-c835342b831c-1000/format/wide1/arsenal_fc_v_real_madrid_c.f._-_uefa_champions_league_2024_25_quarter_final_first_leg.jpeg?imwidth=369",
            days: "5 Days Ago",
            heading: "Highlights: Paris 3-1 Aston Villa"
        },
        {
            img: "https://editorial.uefa.com/resources/0298-1d7b926b5b91-9137495a5eed-1000/format/wide1/topshot-fbl-eur-c1-barcelona-borussia_dortmund.jpeg?imwidth=369",
            img2: "https://editorial.uefa.com/resources/0298-1d7cdcfa8473-31e842091709-1000/format/wide1/arsenal_fc_v_real_madrid_c.f._-_uefa_champions_league_2024_25_quarter_final_first_leg.jpeg?imwidth=369",
            days: "5 Days Ago",
            heading: "Highlights: Barcelona 4-0 B. Dortmund"
        },
        {
            img: "https://editorial.uefa.com/resources/0298-1d7997873700-10f3840b3f5d-1000/format/wide1/fbl-eng-c1-arsenal-real_madrid.jpeg?imwidth=369",
            img2: "https://editorial.uefa.com/resources/0298-1d7ba246709d-b2e2e064601e-1000/format/wide1/fc_barcelona_v_borussia_dortmund_-_uefa_champions_league_2024_25_quarter_final_first_leg.jpeg?imwidth=369",
            days: "6 Days Ago",
            heading: "Highlights: Arsenal 3-0 Real Madrid"
        },
        {
            img: "https://editorial.uefa.com/resources/0298-1d7995e253c7-9cbc74e716df-1000/format/wide1/fc_bayern_munchen_v_fc_internazionale_milano_-_uefa_champions_league_2024_25_quarter_final_first_leg.jpeg?imwidth=369",
            img2: "https://editorial.uefa.com/resources/0295-1cc5a9b08a5e-a1a39bd94589-1000/format/wide1/liverpool_fc_v_bologna_fc_1909_-_uefa_champions_league_2024_25_league_phase_md2.jpeg?imwidth=369",
            days: "6 Days Ago",
            heading: "Highlights: Bayern München 1-2 Inter"
        },
    ]

    return (
        <div className="w-full overflow-hidden">
            <div className='bg-img w-full min-h-[700px]'>
                <div><PlayerImg /></div>
                <div className='flex items-center justify-center gap-9 flex-wrap px-4'>
                    <div className='mt-[70px] w-full md:w-[900px]'>
                        <img src="/img 1.webp" alt="" className='w-full rounded-2xl' />
                    </div>
                    <div className='flex flex-col w-full md:w-[464.02px] bg-blue-950 rounded-2xl mt-[70px] p-3'>
                        <p className='text-white text-2xl'>Headlines</p>
                        {[
                            ["Champions League form Guide", "https://editorial.uefa.com/resources/0298-1d8187410a2c-8deacfebfada-1000/format/wide1/fc_internazionale_v_cagliari_-_serie_a.jpeg?imwidth=158"],
                            ["Watch all the first-leg goals", "https://editorial.uefa.com/resources/0298-1d7ba64bcac2-e1451a966d64-1000/format/wide1/paris_saint-germain_v_aston_villa_fc_-_uefa_champions_league_2024_25_quarter_final_first_leg.jpeg?imwidth=158"],
                            ["Trophy Tour visits Asia and southern Africa", "https://editorial.uefa.com/resources/0298-1d7ec58c4d05-e0a5f4a3bcf9-1000/format/wide1/fug_8381.jpeg?imwidth=158"],
                            ["Ticket launch for men's finals", "https://editorial.uefa.com/resources/0298-1d76fc10cae0-925181dceb2e-1000/format/wide1/borussia_dortmund_v_real_madrid_cf_-_uefa_champions_league_final_2023_24.jpeg?imwidth=158"],
                            ["Check out the knockout bracket", "https://editorial.uefa.com/resources/0297-1d434fb2191a-d082684af327-1000/format/wide1/bracket_final_20250312234631.png?imwidth=158"]
                        ].map(([text, img], i) => (
                            <div key={i} className='flex items-center mt-3'>
                                <img src={img} alt='' className='rounded-2xl w-[130px]' />
                                <p className='text-white text-lg ml-3'>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='px-4'>
                <div className='flex flex-col md:flex-row items-center justify-between mt-5'>
                    <p className='text-black text-2xl'>Moments</p>
                    <a href="#" className='text-blue-600 text-lg'>See all moments {Arrow2}</a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
                    <Card2 />
                </div>

                <div>
                    <p className='text-black text-2xl mt-9'>Latest News</p>
                    <div className='grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-5 place-items-center mt-5'>
                        <img src="https://editorial.uefa.com//resources/0298-1d84ae36dd99-fe3fab881b25-1000/format/wide1/paris_saint-germain_v_aston_villa_fc_-_uefa_champions_league_2024_25_quarter_final_first_leg.jpeg?imwidth=988" className='w-full max-w-[678px] lg:h-[381.28px] h-auto rounded-2xl' />
                        <div className='flex flex-col lg:flex-row  justify-center gap-5'>
                            {[
                                ["Top scorer: Raphinha leads way", "https://editorial.uefa.com//resources/0298-1d7b7d4c8870-440d14589499-1000/format/wide1/fbl-eur-c1-barcelona-borussia_dortmund.jpeg?imwidth=369"],
                                ["Dortmund vs Barcelona preview", "https://editorial.uefa.com//resources/0298-1d84c2a24df5-eb27a11e48b4-1000/format/wide1/fbl-eur-c1-dortmund-training.jpeg?imwidth=369"]
                            ].map(([text, img], i) => (
                                <div key={i} className='w-[324px] lg:h-[381.28px]  bg-white rounded-2xl'>
                                    <img src={img} className='w-full h-[182.25px] rounded-2xl' />
                                    <p className='text-2xl ml-4'>{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center mt-6'>
                        <div className='flex flex-col lg:flex-row justify-center gap-5'>
                            {[
                                ["Watch all the first-leg goals", "https://editorial.uefa.com//resources/0298-1d7ba64bcac2-e1451a966d64-1000/format/wide1/paris_saint-germain_v_aston_villa_fc_-_uefa_champions_league_2024_25_quarter_final_first_leg.jpeg?imwidth=369"],
                                ["Lockdown On The Last Eight", "https://editorial.uefa.com//resources/0297-1d4360946498-38a13f36ad18-1000/format/wide1/meet_madrid_1_.jpeg?imwidth=369"]
                            ].map(([text, img], i) => (
                                <div key={i} className='w-[324px] lg:h-[381.28px] bg-white rounded-2xl'>
                                    <img src={img} className='w-full h-[182.25px] rounded-2xl' />
                                    <p className='text-xl mt-3 ml-4'>{text}</p>
                                </div>
                            ))}
                        </div>
                        <img src="https://editorial.uefa.com//resources/0298-1d7cfeda81d9-4c1dc2e55b7d-1000/format/wide1/ucl_24x27_-_label_frame_-_email.jpeg?imwidth=988" className='w-full max-w-[678px] h-auto lg:h-[381.28px] rounded-2xl' />
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <button className='w-[280px] rounded-xl text-blue-600 border-2 border-blue-600 p-3'>View all news</button>
                    </div>
                </div>
            </div>

            <div className='mt-16 bg-img2 p-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <p className="text-2xl text-white font-bold mt-8 md:mt-16">Highlights</p>
                    <div className='flex items-center gap-3 mt-8 md:mt-16'>
                        <div className='w-[40px] h-[40px] rounded-full border-2 border-[#0ef] text-[#0ef] font-bold text-center text-2xl flex items-center justify-center'>{Arrow1}</div>
                        <div className='w-[40px] h-[40px] rounded-full border-2 border-[#0ef] text-[#0ef] font-bold text-center text-2xl flex items-center justify-center'>{Arrow2}</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-10 items-center mt-8">
                    {highlightsData.map((data,index)=>(
                        <div key={index} className='w-[329.42px] h-[320px] rounded-2xl bg-[#0a0a61]'>
                            <img src={data.img} alt="" className='rounded-t-2xl'/>
                            <p className='text-sm  ml-3 text-gray-400 mt-4'>{data.days}</p>
                            <p className='text-xl ml-3 text-white'>{data.heading}</p>
                        </div>
                    ))}
                </div>
                <div className='mt-5 flex justify-center'>
                    <button className='w-[280px] rounded-xl text-[#0ef] border-2 border-[#0ef] p-3'>Watch all Highlights</button>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-center mt-6 mb-5 gap-2 px-4'>
                <Link to='/table'><button className='w-[280px] rounded-xl text-blue-600 border-2 border-blue-600 p-3'>Show League Table</button></Link>
                <Link to='/'><button className='w-[280px] rounded-xl text-blue-600 border-2 border-blue-600 p-3'>Back</button></Link>
            </div>

            <Outlet />

            <div className='mt-16 bg-white px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <p className="text-2xl text-black font-bold mt-8 md:mt-16">Editor's Pick</p>
                    <div className='flex items-center gap-3 mt-8 md:mt-16'>
                        <div className='w-[40px] h-[40px] rounded-full border-2 border-blue-600 text-blue-600 font-bold text-center text-2xl flex items-center justify-center'>{Arrow1}</div>
                        <div className='w-[40px] h-[40px] rounded-full border-2 border-blue-600 text-blue-600 font-bold text-center text-2xl flex items-center justify-center'>{Arrow2}</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-10 items-center mt-8">
                    {highlightsData.map((data,index)=>(
                        <div key={index} className='w-[329.42px] h-[320px] rounded-2xl border border-gray-500'>
                            <img src={data.img2} alt="" className='rounded-t-2xl'/>
                            <p className='text-sm ml-3 text-gray-400 mt-4'>{data.days}</p>
                            <p className='text-xl ml-3 text-black'>{data.heading}</p>
                        </div>
                    ))}
                </div>
                <div className='mt-5 flex justify-center'>
                    <button className='w-[280px] rounded-xl text-blue-600 border-2 border-blue-600 p-3'>See all Videos</button>
                </div>
            </div>
        </div>
    )
}

export default Home;