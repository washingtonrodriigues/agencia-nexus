import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.css'
import { Separator } from "@/components/ui/separator";

const Contact = () => {
    return (
        <div style={{ marginTop: "30px" }}>
            <h1 className={styles.h1}>Canais de atendimento</h1 >
            <ul className={styles.ul}>
                <li className="flex items-center" style={{ gap: "10px" }}>
                    <Link href="#"><Image src="/wpp-icon.png" alt="Falar com especialista" width={40} height={40} sizes="" /></Link>
                    <div className="flex flex-col">
                        <Link className={styles.number} href="#">(79) 9 9915-9553</Link>
                        <Link className={styles.name} href="#">Timóteo Levi</Link>
                    </div>
                </li>
                <li className="flex items-center" style={{ gap: "10px" }}>
                    <Link href="#"><Image src="/wpp-icon.png" alt="Falar com especialista" width={40} height={40} sizes="" /></Link>
                    <div className="flex flex-col">
                        <Link className={styles.number} href="#">(79) 9 9921-6703</Link>
                        <Link className={styles.name} href="#">Washington Rodrigues</Link>
                    </div>
                </li>
                <li className="flex items-center" style={{ gap: "10px" }}>
                    <Image src="/email-icon.png" alt="Enviar e-mail" width={36} height={28} sizes="" />
                    <Link className={styles.email} href="#">contato.agencianexus@gmail.com</Link>
                </li>
            </ul>
            <div>
                <h2 className={styles.h1}>Acesse as nossas</h2>
                <h2 className={styles.h2}>Redes Sociais</h2>
                <ul className={`flex items-center justify-center ${styles.social_medias}`}>
                    <li><Link href="#"><Image src="/instagram-icon.png" alt="Instagram" width={50} height={50} sizes="" /></Link></li>
                    <li><Link href="#"><Image src="/facebook-icon.png" alt="Facebook" width={50} height={50} sizes="" /></Link></li>
                    <li><Link href="#"><Image src="/linkedin-icon.png" alt="LinkedIn" width={50} height={50} sizes="" /></Link></li>
                    <li><Link href="#"><Image src="/tiktok-icon.png" alt="TikTok" width={50} height={50} sizes="" /></Link></li>
                </ul>
            </div>
            <Separator style={{ opacity: ".3" }} />
        </div>
    );
}

export default Contact;