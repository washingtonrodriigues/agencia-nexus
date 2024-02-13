import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FaWhatsapp, FaRegEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Contact = () => {

    return (
        <div className="mt-[30px]">
            <h1 className="font-poppins tracking-[2px] uppercase text-center">Canais de atendimento</h1 >
            <ul className="flex flex-col gap-5 m-10 lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:py-5">
                <li className="flex items-center gap-[10px] transition-all duration-300 hover:text-primary">
                    <Link href="#"><FaWhatsapp size={40} /></Link>
                    <div className="flex flex-col">
                        <Link className="font-poppins font-bold" href="#">(79) 9 9915-9553</Link>
                        <Link className="font-poppins text-[14px]" href="#">Timóteo Levi</Link>
                    </div>
                </li>
                <li className="flex items-center gap-[10px]  transition-all duration-300 hover:text-primary">
                    <Link href="#"><FaWhatsapp size={40} /></Link>
                    <div className="flex flex-col">
                        <Link className="font-poppins font-bold" href="#">(79) 9 9921-6703</Link>
                        <Link className="font-poppins text-[14px]" href="#">Washington Rodrigues</Link>
                    </div>
                </li>
                <li className="flex items-center gap-[10px]  transition-all duration-300 hover:text-primary">
                    <FaRegEnvelope size={40} />
                    <Link className="font-poppins" href="#">contato.agencianexus@gmail.com</Link>
                </li>
            </ul>
            <div>
                <h2 className="font-poppins tracking-[2px] uppercase text-center">Acesse as nossas</h2>
                <h2 className="font-poppins text-[1.5rem] font-bold text-center">Redes Sociais</h2>
                <ul className="flex items-center justify-center mt-[22px] mb-[30px] gap-[15px]">
                    <li className="rounded-[50%] p-3 border-[2px] cursor-pointer hover:text-primary transition duration-300 hover:border-primary hover:scale-110 border-solid border-white"><Link href="#"><FaInstagram size={30} /></Link></li>
                    <li className="rounded-[50%] p-3 border-[2px] cursor-pointer hover:text-primary transition duration-300 hover:border-primary hover:scale-110 border-solid border-white"><Link href="#"><FaFacebook size={30} /></Link></li>
                    <li className="rounded-[50%] p-3 border-[2px] cursor-pointer hover:text-primary transition duration-300 hover:border-primary hover:scale-110 border-solid border-white"><Link href="#"><FaLinkedin size={30} /></Link></li>
                    <li className="rounded-[50%] p-3 border-[2px] cursor-pointer hover:text-primary transition duration-300 hover:border-primary hover:scale-110 border-solid border-white"><Link href="#"><FaTiktok size={30} /></Link></li>
                </ul>
            </div>
            <Separator style={{ opacity: ".3" }} />
        </div>
    );
}

export default Contact;