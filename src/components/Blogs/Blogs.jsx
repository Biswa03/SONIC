// import React from 'react'
import Img1 from "../../assets/Blogs/blog-1.jpg";
import Img2 from "../../assets/Blogs/blog-2.jpg";
import Img3 from "../../assets/Blogs/blog-3.jpg";
import Heading from "../Shared/Heading";

const BlogData=[
    {
        title:"How to choose perfect smartwatch",
        subtitle:"Lorem asuhjdb aiusbf jahb asbf jahsb jahsb fdaisui h iurgf ",
        published:"Jan 20, 2024 by Disland",
        image: Img1,
        aosDelay:"0",
    },
    {
        title:"How to choose perfect laptop",
        subtitle:"Lorem asuhjdb aiusbf jahb asbf jahsb jahsb fdaisui h iurgf ",
        published:"Jan 20, 2024 by Disland",
        image: Img2,
        aosDelay:"200",
    },
    {
        title:"How to choose perfect VR headset",
        subtitle:"Lorem asuhjdb aiusbf jahb asbf jahsb jahsb fdaisui h iurgf ",
        published:"Jan 20, 2024 by Disland",
        image: Img3,
        aosDelay:"400",
    },
]

const Blogs = () => {
  return (
    <div className="my-12 ml-5 mr-5">
        <div className='container '>
            {/* HEADING SECTION */}
            <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

            {/* BLOG SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:">
                {/* BLOG CARD */}
                {BlogData.map((data)=>(
                     <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.image} className="bg-white  dark:bg-gray-900">
                        {/* IMAGE SECTION */}
                        <div className="overflow-hidden rounded-2xl mb-2">
                            <img src={data.image} 
                            className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"/>
                        </div>
                         {/* CONTENT SECTION */}
                         <div className="space-y-2">
                            <p className="text-xs text-gray-500">{data.published}</p>
                            <p className="font-bold line-clamp-1">{data.title}</p>
                            <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                        </div>
                     </div>
                ))}
                   

            </div>


        </div>
    </div>
  )
}

export default Blogs
