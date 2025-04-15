
import React from 'react'
// import { Carousel } from 'react-responsive-carousel'


const PlayerImg = () => {
    const Data = [
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/0a275dcc-d357-4f4b-9abc-3a19373f62ed/b16e0034-b773-7134-3df1-3a19373f62ed/70d448ce-187d-0490-9305-3a1937456501/IconRenderOutput.webp",
            heading: "MD13 Unpacked 📈"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/bce46fd8-a70d-73d5-2524-3a1936a7066c/b2a0a0c4-181d-e98b-17e0-3a1936a7066c/2a451e49-dc8b-0c7e-8364-3a1936a8c068/IconRenderOutput.webp",
            heading: "MD13 Performance"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/d07eeb42-3321-3f87-e478-3a186e9f5cd9/1c78f44d-0368-4224-af04-fcb6bc3d7a41/d4f435a6-d2d8-3b66-4862-3a1936469541/IconRenderOutput.webp",
            heading: "Salah at Liverpool ⚽"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/16ed5e99-e501-6618-662c-3a1932b33f51/5184ba58-a489-23eb-1a4b-3a1932b33f52/140d866e-44ce-9d55-22db-3a1932bee0df/IconRenderOutput.webp",
            heading: "QF 1st legs ⚽"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/02dfc0ab-f815-e9f9-b0c7-3a18a2225b37/fce78b81-89e8-48ba-90b4-ad2f79b6c443/e9ab83ff-1d08-dacc-0895-3a18a2335d3c/IconRenderOutput.webp",
            heading: "MD13 Team of the Week"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/a765d856-364e-af14-165e-3a14f86379ef/9691db15-e2e9-49c9-8b69-825b2fafd9ee/6cb86ac9-e979-2e84-96f0-3a150d9086fd/IconRenderOutput.webp",
            heading: "Favourite goal? ⚽"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/9d9a1a6d-7be2-04cb-460d-3a14fc7812ce/9f367fb6-5287-4a29-a13c-709919b27773/5d90efc1-9fe2-a9e1-c40a-3a150d933f48/IconRenderOutput.webp",
            heading: "Favourite player? ⭐"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/442a7a8b-5d6a-3b16-35f3-3a14f869ee37/e0ca6657-ba75-4db7-b408-3b246d709f19/3099bd17-0221-55ef-634b-3a150d95c335/IconRenderOutput.webp",
            heading: "Predict Six"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/8516ddf0-9b01-cd32-0311-3a149fb5c4a6/f22b0c0b-ecd4-4c21-8400-0e9850e2fbb9/9a180c23-456f-1b1e-5983-3a150d9b1bb8/IconRenderOutput.webp",
            heading: "UCL Fantasy 📱"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/7222d15f-5ea3-579d-ae4c-3a15c0a3ccc0/b2be6836-2a9d-44f3-bd3d-6f0c9b61f738/26ef2bcd-6e9c-0ec7-1a57-3a15c0a4ddb5/IconRenderOutput.webp",
            heading: "Matchday Menu 🥡"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/58c9fa9e-90ec-2a43-32c3-3a14f86a6dff/613b5610-0af5-40f3-86ad-7c2633a35cbc/12e00166-f134-3d2e-41e6-3a183ac71e5f/IconRenderOutput.webp",
            heading: "Knockout Bracket 🔮"
        },
        {
            img: "https://uefa.cdn.usestoryteller.com/assets/studio-templates/97fadf46-5b25-6d2e-526a-3a19213e6b85/853b8fe8-36dd-437c-aa90-f175ca85c6a3/b2584eb2-94ba-1b09-2496-3a192142e6fa/IconRenderOutput.webp",
            heading: "Off Pitch 📺"
        },
       
        

    ]
    return (
        <div className='flex items-center justify-center gap-5  '>

            {Data.map((data, index) => (
                <div key={index} className='w-[100px] h-[100px] rounded-full border-2 border-[#0ef] mt-3 '>
                    <img className='rounded-full' src={data.img} alt="" />
                    <p className='text-white text-center text-sm'>{data.heading}</p>
                </div>



            ))}


        </div>
    )
}


export default PlayerImg
