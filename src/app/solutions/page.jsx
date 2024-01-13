"use client"

import Image from 'next/image';
import styles from './styles.module.css'
import Link from 'next/link';
import data from './services.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import BlackBtn from '@/components/ui/black-btn';

const Solutions = () => {

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
            `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };

    })

    return (
        <section className={`${styles.section_solutions} relative`}>
            <Image style={{ top: "56px", opacity: ".7" }} className='absolute' src="/solucoestext.png" alt='' width={515} height={121} sizes='' />
            <div className="text-center">
                <h1 className={`${styles.h1}`}>Soluções</h1>
                <h2 className={`${styles.h2}`}>O que a <span className={`${styles.span}`}>Nexus</span> tem para <span className={`${styles.span}`}>você</span>?</h2>
                <span className={styles.separator}></span>
            </div>
            <div className={`${styles.div_bg_blue} absolute bottom-0 left-0 right-0`}></div>
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
                    <SwiperSlide key={item} className={styles.slider_item}>
                        <div className='flex flex-col justify-center items-center'>
                            <Image src={item.image} alt={item.title} width={80} height={80} sizes='' />
                            <h2 className={styles.card_title}>{item.title}</h2>
                        </div>
                        <p className={styles.card_description}>{item.description}</p>
                        <Link className={styles.btn} href="#">Saiba mais</Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <BlackBtn className={styles.view_all_btn} href="" title="Ver tudo" />
        </section>
    );
}

export default Solutions;