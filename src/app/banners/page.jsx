"use client"

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Banners = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <header className={"overflow-hidden"}>
            <Slider {...settings}>
                <div>

                    <Link href="/pages/landingpages" className="hidden lg:block">
                        <Image src="/banners/lp-desktop.png" alt="Banner 1" width={1920} height={1080} sizes="" />
                    </Link>
                    <Link href="/pages/landingpages" className="lg:hidden">
                        <Image src="/banners/lp-mobile.png" alt="Banner 1" width={1200} height={500} sizes="" />
                    </Link>
                </div>
                {/* <div>
                    <Image src="/banner_trafego.png" alt="Banner 2" width={1200} height={500} sizes="" />
                </div>
                <div>
                    <Image src="/banner_trafego.png" alt="Banner 3" width={1200} height={500} sizes="" />
                </div> */}
            </Slider>
        </header>
    );
}

export default Banners;