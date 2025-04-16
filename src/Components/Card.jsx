import React from 'react'


// Your Card component (unchanged)
const Card = (props) => {
    const { date, leg, name1, name2, img1, img2 } = props;
    return (
        <div className='w-[150px] h-[100px] bg-blue-950 rounded-2xl flex flex-col gap-1 p-2'>
            <p className='text-gray-500 text-xs'>{date}</p>
            <p className='text-gray-500 text-xs -mt-1'>{leg}</p>
            <div className='flex items-center mt-1'>
                <img src={img1} alt="" className='w-4 h-4 rounded-full' />
                <p className='text-white text-sm ml-2'>{name1}</p>
            </div>
            <div className='flex items-center mt-1'>
                <img src={img2} alt="" className='w-4 h-4 rounded-full' />
                <p className='text-white text-sm ml-2'>{name2}</p>
            </div>
        </div>
    );
};

// Just apply Swiper around multiple cards


export default Card




import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

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
        <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
                320: { slidesPerView: 1.2 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4.2 },
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='relative w-[190px] h-[285px] bg-black rounded-2xl overflow-hidden'>
                        <div className='bg-blue-400 p-1 absolute top-2 left-2 text-xs text-white rounded-2xl z-10'>NEW</div>
                        <img src={item.img} alt={item.name} className='rounded-2xl w-full h-full object-cover' />
                        <div className='absolute bottom-2 left-2 text-white font-semibold text-sm'>{item.name}</div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
