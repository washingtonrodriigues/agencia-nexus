"use client"

import styles from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import data from './results.json'
import logos from './customerslogo.json'
import Image from 'next/image';
import { useEffect } from 'react';
import classNames from 'classnames';

const Customers = () => {
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

    })
    return (
        <section className={`${styles.section_customers}`}>
            <div className={styles.first_content}>
                <div className="text-center relative">
                    <h1 className={`${styles.first_h1}`}>Resultados</h1>
                    <h2 className={`${styles.h2}`}>O que <span className={`${styles.span}`}>você</span> também pode <span className={`${styles.span}`}>alcançar</span>!</h2>
                    <span className={styles.separator}></span>

                </div>
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
                            <Image src={item.image} alt={item.title} width={100} height={0} sizes='' />

                            <div className='flex flex-col items-center'>
                                <h2 className={styles.card_title}>{item.title}</h2>
                                <p className={styles.card_text1}>{item.text1}</p>
                                <p className={styles.card_text2}>{item.text2}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={`${styles.second_content} overflow-hidden `}>
                <div className="text-center">
                    <h1 className={`${styles.second_h1}`}>Nossos clientes</h1>
                    <h2 className={`${styles.second_h2}`}>Quem<span className={`${styles.second_span}`}> confia</span></h2>
                    <span className={classNames([styles.separator, styles.separator_2])}></span>
                </div>
                <div className={`flex  items-center justify-center gap-4 ${styles.div_logos_animated}`} style={{ paddingTop: "20px", width: "100%" }}>
                    {logos.map(logo => (
                        <Image className={styles.logo_img} key={logo} src={logo.image} alt={logo.name} width={100} height={0} sizes='' />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Customers;