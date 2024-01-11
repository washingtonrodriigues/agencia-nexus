"use client"

import Image from 'next/image';
import styles from './styles.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import data from './services.json'
import { useEffect } from 'react';

const Solutions = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        // Cria um elemento de estilo
        const customStyle = document.createElement('style');

        // Adiciona os estilos desejados
        customStyle.innerHTML = `
            .slick-track {
                display: flex !important;
                gap: 10px !important; /* Adicione o espaçamento desejado entre os slides */
            }
        `;

        // Adiciona o elemento de estilo ao cabeçalho do documento
        document.head.appendChild(customStyle);

        // Remove o elemento de estilo quando o componente for desmontado
        return () => {
            document.head.removeChild(customStyle);
        };
    }, []);

    return (
        <section className={`${styles.section_solutions} relative`}>
            <Image style={{ top: "56px", opacity: ".7" }} className='absolute' src="/solucoestext.png" alt='' width={515} height={121} sizes='' />
            <div className="text-center">
                <h1 className={`${styles.h1}`}>Soluções</h1>
                <h2 className={`${styles.h2}`}>O que a <span className={`${styles.span}`}>Nexus</span> tem para <span className={`${styles.span}`}>você</span>?</h2>
            </div>
            <div className={`${styles.div_bg_blue} absolute bottom-0 left-0 right-0`}></div>

            <Slider {...settings} className={styles.slider} >
                {data.map(item => (
                    <Card key={item} className={`${styles.slider_item}`}>
                        <CardHeader style={{ gap: "10px", padding: "15px" }} className='flex flex-col items-center'>
                            <Image src={item.image} alt={item.title} width={60} height={60} sizes='' />
                            <CardTitle className={styles.card_title}>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent >
                            <p style={{ textAlign: "justify" }} >{item.description}</p>
                        </CardContent>
                        <CardFooter className='flex justify-center'>
                            <Link className={styles.btn} href="#">Saiba mais</Link>
                        </CardFooter>
                    </Card>
                ))}
            </Slider>
        </section>
    );
}

export default Solutions;