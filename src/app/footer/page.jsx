"use client"

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import styles from './styles.module.css'
import { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {
    const [date, setDate] = useState()

    useEffect(() => {
        setDate(new Date().getFullYear())
    }, [])

    return (
        <footer className="my-[30px] mx-[10px]">
            <div className="lg:h-[250px] lg:pt-[50px] flex justify-center gap-[15px] lg:gap-20 lg:text-base uppercase font-poppins mb-[30px] text-[14px]">
                <ul className="flex flex-col gap-[10px]">
                    <li className="text-[#00f4ff]">institucional</li>
                    <li className="hover:underline"><Link href="">Quem somos</Link></li>
                    <li className="hover:underline"><Link href="">Política de Privacidade</Link></li>
                </ul>
                <ul className="flex flex-col gap-[10px]">
                    <li className="text-[#00f4ff]">Ajuda</li>
                    <li className="hover:underline"><Link href="">FAQ | Dúvidas Frequentes</Link></li>
                </ul>
            </div>
            <Separator style={{ opacity: ".3" }} />
            <div className="flex m-[30px] gap-5 flex-col items-center justify-center">
                <p className="text-sm lg:text-base">© {date} Todos os direitos reservados</p>
                <Image src="/logos/nexuslogo.png" alt="Nexus | Agência Digital" width={150} height={0} sizes="" className="lg:w-[200px]" />
            </div>
        </footer>
    );
}

export default Footer;