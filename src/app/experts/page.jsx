"use client"

import Image from "next/image";
import BlackBtn from "../../components/ui/black-btn"
import styles from './styles.module.css'

const Experts = () => {
    return (
        <div className={`${styles.container} relative overflow-hidden flex items-center justify-between`}>
            <Image style={{ top: "20px", opacity: ".7" }} className='absolute' src="/especialistbgtext.png" alt='' width={515} height={121} sizes='' />
            <div className={styles.first_content}>
                <p className={styles.p1}>Fale com nossos</p>
                <p className={styles.p2}>Especialistas</p>
                <BlackBtn className={styles.btn} href="#" title="Falar agora" />
            </div>
            <Image style={{ height: "100%" }} src="/man-img.png" alt="Fale com um de nossos especialistas" width={240} height={0} sizes="" />
        </div>
    );
}

export default Experts;