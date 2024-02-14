"use client"

import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LastSectionProduct = ({ title, image, ...props }) => {

    const [hovered, setHovered] = useState(false)

    return (
        <div className='flex lg:flex-row justify-center lg:gap-10 flex-col items-center py-[30px] lg:py-[50px] lg:min-h-[500px]'>
            <h2 className="font-ubuntu text-[1.8rem] lg:text-[2.5rem] px-[30px] font-bold text-center mb-[50px] lg:w-[320px] lg:px-0 ">{title} <span className="text-[#42c6ff]">{props.span}</span> {props.title_continuation}</h2>
            <Image src={image} alt={props.alt} width={300} height={0} sizes='' className={`lg:w-[${props.img_lg_size}]`} />
            <div className='lg:w-[320px]'>
                <Link className="font-poppins flex justify-center items-center border-[2px] border-solid border-[#42c6ff] rounded-[20px] w-[200px] p-[10px] mt-[30px] transition duration-300 hover:bg-[#42c6ff] hover:text-black lg:text-[1.2rem] lg:py-4 lg:rounded-[50px]" href="https://linktr.ee/nexusagenciadigital" target='_blank' onMouseEnter={() => setHovered(true)} onMouseOut={() => setHovered(false)}>{props.text_btn} <ChevronRightIcon style={{ transform: hovered ? "translateX(10px)" : "", transition: ".3s" }} color={hovered ? "#000" : "#fff"} /></Link>
            </div>
        </div>
    );
}

export default LastSectionProduct;