"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const WhatsappBtn = () => {
    const [isShaking, setIsShaking] = useState(false);

    useEffect(() => {
        const shakeButton = () => {
            setIsShaking(true);

            // Remova a classe após a conclusão da animação
            setTimeout(() => {
                setIsShaking(false);
            }, 500);
        };

        // Chame a função shakeButton a cada 5 segundos
        const intervalId = setInterval(shakeButton, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const buttonStyle = {
        zIndex: 9999,
        bottom: "20px",
        backgroundColor: "rgb(50, 168, 82)",
        borderRadius: "50%",
        padding: "10px",
        animation: isShaking ? 'shake 0.5s ease-in-out' : 'none',
    };

    return (
        <Link

            href="https://linktr.ee/nexusagenciadigital" target="_blank"
            className="whatsapp-button fixed right-4 flex h-[65px] w-[65px] items-center justify-center"
            style={buttonStyle}
        >
            <Image
                src="/icons/wppsvg.svg"
                alt="Whatsapp"
                width={35}
                height={35}
                sizes=""
            />
        </Link>
    );
}

export default WhatsappBtn;