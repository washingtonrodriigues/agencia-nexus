"use client"

import Image from 'next/image';
import styles from './styles.module.css'
import Link from 'next/link';
import data from './services.json'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import BlackBtn from '@/components/ui/black-btn';

const Solutions = () => {

    const swiper = useSwiper()

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
                .swiper-button-next, .swiper-button-prev{
                    color: #fff;

                }
                .swiper-button-next::after, .swiper-button-prev::after {
                    font-size: 26px;
                    
                }
                
                .swiper-pagination{
                    position: relative;
                    margin-top: 20px
                }
                .swiper-pagination-bullet {
                    position: relative;
                    background-color: #757575;
                    opacity: .6;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }
        
                .swiper-pagination-bullet-active {
                    background-color: #00438C;
                    opacity: 1;
                }
        
                .swiper-pagination-bullet::before {
                    content: "";
                    width: 0;
                    height: 0;
                    background: rgba(0, 0, 0, 0);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    border: 2px solid #00438C; /* Mude a cor da borda conforme necessário */
                    transition: all 0.2s ease-in-out;
                    opacity: 0;
                }
        
                .swiper-pagination-bullet-active::before {
                    width: 20px; /* Ajuste conforme necessário para o tamanho do círculo ao redor da bullet ativa */
                    height: 20px; /* Ajuste conforme necessário para o tamanho do círculo ao redor da bullet ativa */
                    opacity: 1;
                }
            `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };

    }, [])

    return (
        <section className="relative h-[680px] pt-[30px] bg-[#282828] lg:h-[840px] lg:pt-[50px]">
            <Image style={{ top: "56px", opacity: ".7" }} className='absolute w-[100%]' src="/solucoestext.png" alt='' width={515} height={121} sizes='' />
            <div className="text-center">
                <h1 className="font-poppins uppercase text-[#00f4ff] flex justify-center items-center tracking-[2px] lg:text-[18px]">Soluções</h1>
                <h2 className="font-ubuntu lg:text-[50px] text-[1.5rem] font-bold">O que a <span className="text-[#00f4ff]">Nexus</span> tem para <span className="text-[#00f4ff]">você</span>?</h2>
                <span className={styles.separator}></span>
            </div>
            <div className="bg-[#01c8e2] h-[200px] absolute bottom-0 left-0 right-0"></div>
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
                    className='mt-[30px]'
                >
                    {data.map(item => (
                        <SwiperSlide key={item} className={`${styles.slider_item} max-w-[320px] bg-white text-black rounded-[5px] cursor-grab box-shadow`}>
                            <div className='flex flex-col justify-center items-center'>
                                <Image src={item.image} alt={item.title} width={80} height={80} sizes='' />
                                <h2 className={styles.card_title}>{item.title}</h2>
                            </div>
                            <p className={styles.card_description}>{item.description}</p>
                            <Link className="bg-[#01c8e2] hover:bg-[#1eb6c9] hover:tracking-[2px] duration-200 text-black w-[220px] h-[50px] flex justify-center items-center rounded-[5px] font-poppins font-bold uppercase blue-btn-shadow" href={item.link}>Saiba mais</Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='hidden lg:block mt-10 mx-[30px]'>
                <Swiper
                    grabCursor={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    slidesPerView={'auto'}
                    slidesPerGroup={1}
                    pagination={true}
                    modules={[Navigation]}

                >
                    {data.map(item => (
                        <SwiperSlide style={{ height: '530px' }} key={item} className={`${styles.slider_item}  bg-white text-black cursor-grab box-shadow rounded-[20px] max-w-[360px] mx-[20px]`}>
                            <div className='flex flex-col justify-center items-center'>
                                <Image src={item.image} alt={item.title} width={80} height={80} sizes='' />
                                <h2 className={styles.card_title}>{item.title}</h2>
                            </div>
                            <p className={styles.card_description}>{item.description}</p>
                            <Link className="bg-[#01c8e2] hover:bg-[#1eb6c9] hover:tracking-[2px] duration-200 text-black w-[220px] h-[50px] flex justify-center items-center rounded-[5px] font-poppins font-bold uppercase blue-btn-shadow" href={item.link}>Saiba mais</Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div onClick={() => swiper.slideNext()} className="swiper-button-next"></div>
                <div onClick={() => swiper.slidePrev()} className="swiper-button-prev"></div>
            </div>
            <div className='absolute w-full'>
                <BlackBtn className="flex justify-center items-center" href="" title="Ver tudo" />
            </div>
        </section >
    );
}

export default Solutions;