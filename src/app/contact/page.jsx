import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Contact = () => {
    return (
        <div className="mt-[30px]">
            <h1 className="font-poppins tracking-[2px] uppercase text-center">Canais de atendimento</h1 >
            <ul className="flex flex-col gap-5 m-10 lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:py-5">
                <li className="flex items-center gap-[10px]">
                    <Link href="#"><Image src="/wpp-icon.png" alt="Falar com especialista" width={40} height={40} sizes="" /></Link>
                    <div className="flex flex-col">
                        <Link className="font-poppins font-bold" href="#">(79) 9 9915-9553</Link>
                        <Link className="font-poppins text-[14px]" href="#">Timóteo Levi</Link>
                    </div>
                </li>
                <li className="flex items-center gap-[10px]">
                    <Link href="#"><Image src="/wpp-icon.png" alt="Falar com especialista" width={40} height={40} sizes="" /></Link>
                    <div className="flex flex-col">
                        <Link className="font-poppins font-bold" href="#">(79) 9 9921-6703</Link>
                        <Link className="font-poppins text-[14px]" href="#">Washington Rodrigues</Link>
                    </div>
                </li>
                <li className="flex items-center gap-[10px]">
                    <Image src="/email-icon.png" alt="Enviar e-mail" width={36} height={28} sizes="" />
                    <Link className="font-poppins" href="#">contato.agencianexus@gmail.com</Link>
                </li>
            </ul>
            <div>
                <h2 className="font-poppins tracking-[2px] uppercase text-center">Acesse as nossas</h2>
                <h2 className="font-poppins text-[1.5rem] font-bold text-center">Redes Sociais</h2>
                <ul className="flex items-center justify-center mt-[22px] mb-[30px] gap-[15px]">
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