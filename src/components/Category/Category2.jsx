// import React from 'react';
import Image1 from '../../assets/category/gaming.png';
import Image2 from '../../assets/category/vr.png';
import Image3 from '../../assets/category/speaker.png';
import Button from '../Shared/Button';

const Category2 = () => {
  return (
    <div className='py-8 ml-5 mr-5'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* FIRST COL */}
            <div data-aos="fade-right" data-aos-once="true" className=' sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                <div className='mb-4'>
                    <p className='text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold uppercase opacity-20 mb-2'>Play Stations</p>
                    <Button
                        text="Browse"
                        bgColor={"bg-primary_red"}
                        textColor={"text-white"}/>
                </div>
                </div>
                <img src={Image1} className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0 '/>
            </div>


            {/* SECOND COL */}
            <div data-aos="fade-up" data-aos-once="true" className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                <div className='mb-4'>
                    <p className='mb:[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'> VR SETS</p>
                    <Button
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-brandGreen"}/>
                </div>
                </div>
                <img src={Image2} className='w-[320px] absolute bottom-0 right-0'/>
            </div>

            {/* THIRD COL */}
            
            <div data-aos="fade-left" data-aos-once="true" className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                <div className='mb-4'>
                    <p className='mb:[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'> SPEAKERS</p>
                    <Button
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-brandBlue"}/>
                </div>
                </div>
                <img src={Image3} className='w-[200px] absolute right-0 bottom-0 '/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category2;
