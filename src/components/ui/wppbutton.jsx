"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const WhatsappBtn = ({ onclick }) => {
    const [isShaking, setIsShaking] = useState(false);
    // const [hovered, setHovered] = useState(false)

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
        // backgroundColor: hovered ? "rgb(21, 110, 45)" : "rgb(50, 168, 82)",
        borderRadius: "50%",
        padding: "10px",
        animation: isShaking ? 'shake 0.5s ease-in-out' : 'none',
    };

    return (
        <button

            onClick={onclick}
            className="whatsapp-button fixed right-4 flex h-[65px] w-[65px] items-center justify-center transition-all duration-300"
            style={buttonStyle}
        // onMouseEnter={setHovered(true)}
        // onMouseLeave={setHovered(false)}
        >
            <Image
                src="/icons/wppsvg.svg"
                alt="Whatsapp"
                width={35}
                height={35}
                sizes=""
            />
        </button>
    );
}

export default WhatsappBtn;