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
        <footer style={{ margin: "30px 0" }}>
            <div className={styles.container_ul}>
                <ul className={styles.ul}>
                    <li className={styles.title_ul}>institucional</li>
                    <li><Link href="">Quem somos</Link></li>
                    <li><Link href="">Política de Privacidade</Link></li>
                </ul>
                <ul className={styles.ul}>
                    <li className={styles.title_ul}>Ajuda</li>
                    <li><Link href="">FAQ | Dúvidas Frequentes</Link></li>
                </ul>
            </div>
            <Separator style={{ opacity: ".3" }} />
            <div style={{ margin: "30px", gap: "20px" }} className="flex flex-col items-center justify-center">
                <p>© {date} Nexus Agência Digital</p>
                <Image src="/nexuslogo.png" alt="Nexus | Agência Digital" width={150} height={0} sizes="" />
            </div>
        </footer>
    );
}

export default Footer;