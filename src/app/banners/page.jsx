"use client"

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './styles.module.css'

const Banners = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <header className={`overflow-hidden ${styles.header}`}>
            <Slider {...settings}>
                <div>
                    <Image src="/banner_trafego.png" alt="Banner 1" width={1200} height={500} />
                </div>
                <div>
                    <Image src="/banner_trafego.png" alt="Banner 2" width={1200} height={500} />
                </div>
                <div>
                    <Image src="/banner_trafego.png" alt="Banner 3" width={1200} height={500} />
                </div>
            </Slider>
        </header>
    );
}

export default Banners;