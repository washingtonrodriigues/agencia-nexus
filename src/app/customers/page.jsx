"use client"

import styles from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import data from './results.json'
import logos from './customerslogo.json'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const Customers = () => {
    const [swiper, setSwiper] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
                .swiper-pagination-bullet{
                    background-color: #fff;
                    opacity: .6;

                }
                .swiper-pagination-bullet-active{
                    background-color: #007AFF;
                    opacity: 1
                }
            `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };

    }, [])
    return (
        <section className=" lg:mt-[50px] lg:h-auto">
            <div className="h-auto py-[30px]">
                <div className="lg:ml-[50px] relative">
                    <h1 className="font-poppins uppercase text-[#00f4ff] tracking-[2px] text-center lg:text-[18px] lg:text-left">Resultados</h1>
                    <h2 className="font-ubuntu text-center   lg:text-[50px] text-[1.5rem] font-bold lg:text-left">O que <span className="text-[#00f4ff]">você</span> também pode <span className="text-[#00f4ff]">alcançar</span>!</h2>
                    <span className={styles.separator}></span>

                </div>
                {/* CAROUSEL MOBILE VERSION */}
                <div className='lg:hidden'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        navigation={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        style={{ marginTop: "30px" }}
                    >
                        {data.map(item => (
                            <SwiperSlide key={item} className={`max-w-[320px] bg-white text-black rounded-[5px] cursor-grab ${styles.slider_item}`}>
                                <Image className='rounded-[50%]' src={item.image} alt={item.title} width={100} height={0} sizes='' />
                                <div className='flex flex-col items-center'>
                                    <h2 className="font-poppins font-bold text-[1.8rem] text-[#0078ac]">{item.title}</h2>
                                    <p className="font-poppins">{item.text1}</p>
                                    <p className="font-poppins text-[14px]">{item.text2}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* CAROUSEL DESKTOP VERSION */}
                <div className='hidden lg:flex items-center my-[50px]'>
                    <div onClick={() => swiper.slidePrev()} className={`swiper-button-prev-2 ${isBeginning ? 'opacity-50' : ''}`}><ChevronLeftIcon size={40}></ChevronLeftIcon></div>
                    <Swiper
                        onSwiper={setSwiper}
                        onSlideChange={handleSlideChange}
                        grabCursor={true}
                        navigation={{
                            nextEl: '.swiper-button-next-2',
                            prevEl: '.swiper-button-prev-2',
                        }}
                        spaceBetween={20}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        pagination={true}
                        modules={[Navigation]}

                    >
                        {data.map(item => (
                            <SwiperSlide key={item} className={`bg-white text-black cursor-grab px-[30px] py-[12px] rounded-3xl max-w-[380px] ${styles.slider_item}`} style={{ height: '290px', alignItems: "flex-start", justifyContent: 'space-between' }}>
                                <div className='flex items-center h-[150px]'>
                                    <Image className='rounded-[50%]' src={item.image} alt={item.title} width={120} height={0} sizes='' />
                                </div>
                                <div className='flex flex-col pb-3'>
                                    <h2 className="circular-black text-[42px] text-[#0078ac] leading-[42px]">{item.title}</h2>
                                    <p className="circular-book text-[22px]">{item.text1}</p>
                                    <p className="font-poppins text-[15px]">{item.text2}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div onClick={() => swiper.slideNext()} className={`swiper-button-next-2 ${isEnd ? 'opacity-50' : ''}`}><ChevronRightIcon size={40}></ChevronRightIcon></div>

                </div>
            </div>
            <div className="overflow-hidden bg-white h-[260px] pt-[30px] lg:pt-[50px] lg:pb-[50px] lg:h-auto">
                <div className="text-center lg:ml-[50px]">
                    <h1 className="text-[#0078ac] font-poppins uppercase tracking-[2px] lg:text-[18px] lg:text-left">Nossos clientes</h1>
                    <h2 className="text-black font-ubuntu text-[2rem] font-bold lg:text-[50px] lg:text-left">Quem<span className="text-[#0078ac]"> confia</span></h2>
                    <span className={classNames([styles.separator, styles.separator_2])}></span>
                </div>
                <div className={`flex w-[100%] pt-[20px] lg:pt-[50px] items-center justify-center gap-4 lg:gap-10 ${styles.div_logos_animated}`} >
                    {logos.map(logo => (
                        <Image className={`${styles.logo_img} lg:w-[120px]`} key={logo} src={logo.image} alt={logo.name} width={100} height={0} sizes='' />
                    ))}
                </div>
            </div>
        </section >
    );
}

export default Customers;