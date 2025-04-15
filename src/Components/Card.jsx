import React from 'react'

const Card = (props) => {

    const { date, leg, name1, name2, img1, img2 } = props
    return (
        <div>
            <div className='w-[150px] h-[100px] bg-blue-950 rounded-2xl flex flex-col gap-1'>
                <p className='text-gray-500 ml-2 '>{date}</p>
                <p className='text-gray-500 ml-2 -mt-2'>{leg}</p>
                <div className='flex flex-row ml-2'>
                    <img src={img1} alt="" />
                    <p className='text-white ml-1'>{name1}</p>
                </div>
                <div className='flex flex-row ml-2 mt-1'>
                    <img src={img2} alt="" />
                    <p className='text-white ml-1'>{name2}</p>
                </div>
            </div>
        </div>
    )
}

export default Card




export const Card2 = () => {
    const data = [
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/clips/0cff3a49-bcc2-42ba-c198-3a193651f61c/638799599839003198_image_thumbnail_webp.webp",
            name: "Mohamed Salah 😮‍💨⚽"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/clips/5e2a8e39-715e-9791-84a9-3a19364f0943/638799599033242913_image_thumbnail_webp.webp",
            name: "Mohamed Salah ⭐⚽"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/clips/8163103b-e2c3-7b97-1596-3a193650413e/638799598767836214_image_thumbnail_webp.webp",
            name: "Salah x Liverpool 🔴🏆"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/clips/ab6ebd4e-b94d-3284-3f8c-3a19364d7d33/638799597194182002_image_thumbnail_webp.webp",
            name: "Salah x Liverpool 🔴🏆"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/clips/66d7e770-0303-378b-03e5-3a1935f80507/638799541428440777_image_thumbnail_webp.webp",
            name: "Khvicha Kvaratskhelia ⚽"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/clips/467c40da-0cfb-7b87-799b-3a1935de5e7a/638799524332585051_image_thumbnail_webp.webp",
            name: "Lamine Yamal ✨⚽"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/clips/2c1b8769-41d9-22fb-9e9c-3a1935df9788/638799525049540374_image_thumbnail_webp.webp",
            name: "Désiré Doué ⚽"
        },
        
    ]
    return (
        <div className='flex flex-row gap-3'>
            {data.map((Data, index) => (
                <div key={index} className='w-[190px] h-[285px] bg-black rounded-2xl  '>
                    <div className='bg-blue-400  p-1 ml-3 mt-2 absolute rounded-2xl'>NEW</div>
                    <img src={Data.img} alt="" className='rounded-2xl' />
                    <div className='absolute '>{Data.name}</div>
                    
                    
                </div>
            ))}

        </div>
    )
}


