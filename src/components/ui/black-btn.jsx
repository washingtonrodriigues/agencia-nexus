"use client"

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BlackBtn = ({ title, href, className, style }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <Link onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href={href} className={`${className} bg-black text-white uppercase font-poppins font-bold py-[13px] px-7 rounded-[25px] flex justify-center items-center my-5 mx-auto w-[200px] gap-[10px] transition duration-300 border-[1px] border-solid border-black hover:bg-transparent hover:text-black`} style={style}>{title} <ChevronRightIcon style={{ transform: hovered ? "translateX(10px)" : "", transition: ".3s" }} color={hovered ? "#000" : "#fff"} /></Link>
    );
}

export default BlackBtn;