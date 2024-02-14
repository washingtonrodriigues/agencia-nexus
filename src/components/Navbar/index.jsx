"use client"

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { BarChart4Icon, ChevronDownIcon, Code2Icon, MenuIcon } from "lucide-react";
import Image from "next/image";
import styles from './styles.module.css'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const Navbar = () => {
    const [isMenuSticky, setMenuSticky] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const threshold = 100; // Ajuste conforme necessário

            setMenuSticky(scrollPos > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`bg-transparent flex items-center justify-between z-[1000] p-[15px] transition-all duration-[0.3s] ease ${styles.navbar} ${isMenuSticky ? styles.sticky : ''} lg:px-8`} >
            <Link href="/"> <Image src="/logos/nexuslogo.png" alt="Nexus Agência Digital" className="lg:w-[200px]" width={150} height={76} sizes="" /></Link>
            <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                    <Button className="bg-transparent">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[100%] bg-black opacity-[0.9] z-[9999]" side="right" >
                    <ul className="flex h-full flex-col items-center justify-center font-poppins">
                        <li className="uppercase mb-5 font-bold text-[#42c6ff]">
                            Menu
                        </li>
                        <li className="py-4">
                            <SheetClose className="text-lg" asChild>
                                <Link href="/">Home</Link>
                            </SheetClose>
                        </li>
                        <li>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="options" style={{ borderBottom: "none" }}>
                                    <AccordionTrigger className="text-lg">
                                        Soluções
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="flex flex-col gap-4 text-center">
                                            <li>
                                                <h2 className="text-[#42c6ff] text-[1rem] flex justify-center items-center gap-[5px]">
                                                    <BarChart4Icon size={20} />
                                                    Tráfego Pago
                                                    <ChevronDownIcon size={16} />
                                                </h2>
                                                <ul className="mt-5 flex flex-col gap-[15px] text-base">
                                                    <li>
                                                        <SheetClose asChild>
                                                            <Link href="/pages/metaads">Meta ADS</Link>
                                                        </SheetClose>
                                                    </li>
                                                    <li>
                                                        <SheetClose asChild>
                                                            <Link href="/pages/googleads">Google ADS</Link>
                                                        </SheetClose>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className="text-[#42c6ff] text-[1rem] flex justify-center items-center gap-[5px]">
                                                    <Code2Icon size={20} />
                                                    Desenvolvimento
                                                    <ChevronDownIcon size={16} />
                                                </h2>
                                                <ul className="mt-5 flex flex-col gap-[15px] text-base">
                                                    <li>
                                                        <SheetClose asChild>
                                                            <Link href="/pages/landingpages">Landing Pages</Link>
                                                        </SheetClose>
                                                    </li>
                                                    <li>
                                                        <SheetClose asChild>
                                                            <Link href="/pages/websites">Websites</Link>
                                                        </SheetClose>
                                                    </li>
                                                    <li>
                                                        <SheetClose asChild>
                                                            <Link href="/pages/sistemasweb">Sistemas Web</Link>
                                                        </SheetClose>
                                                    </li>
                                                    <li>
                                                        <SheetClose asChild>
                                                            <Link href="/pages/botsautomacao">Bots de Automação</Link>
                                                        </SheetClose>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </li>
                        <li className="py-4">
                            <SheetClose className="text-lg" asChild>
                                <Link href="#">Sobre</Link>
                            </SheetClose>
                        </li>
                        <li className="py-4">
                            <SheetClose className="text-lg" asChild>
                                <Link href="#">Contato</Link>
                            </SheetClose>
                        </li>
                        <li >
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    className="border-b-0"
                                    value="options-social-medias">
                                    <AccordionTrigger className="text-lg">
                                        Redes Sociais
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="mt-5 flex flex-col gap-[20px] text-base text-center">
                                            <li>
                                                <SheetClose asChild>
                                                    <Link href="#">LinkedIn</Link>
                                                </SheetClose>
                                            </li>
                                            <li>
                                                <SheetClose asChild>
                                                    <Link href="#">Instagram</Link>
                                                </SheetClose>
                                            </li>
                                            <li>
                                                <SheetClose asChild>
                                                    <Link href="#">Facebook</Link>
                                                </SheetClose>
                                            </li>
                                            <li>
                                                <SheetClose asChild>
                                                    <Link href="#">TikTok</Link>
                                                </SheetClose>
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </li>
                        <li className="mt-5">

                            <Link className="text-base rounded-[50px] px-4 py-3 bg-[#42c6ff] text-black h-[50px] uppercase font-bold" href="https://linktr.ee/nexusagenciadigital">
                                Fale com um especialista
                            </Link>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
            <ul className="hidden h-full cursor-pointer font-medium text-[18px] lg:flex justify-center items-center gap-[30px]">
                <li className="hover:border-opacity-[1] border-t-2 border-opacity-0 border-[#42c6ff] h-full flex justify-center items-center duration-300">
                    <DropdownMenu open={isDropdownOpen} onOpenChange={(isOpen) => setIsDropdownOpen(isOpen)}>
                        <DropdownMenuTrigger asChild>
                            <span className="flex items-center">Soluções <ChevronDownIcon className={`transition ${isDropdownOpen ? 'rotate-180' : ''}`} /></span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex text-[18px] justify-around py-5 gap-5 mt-5 w-[600px] h-[300px] rounded-3xl">
                            <ul>
                                <li className="font-semibold mb-8">Tráfego Pago</li>
                                <li className="hover:underline"><a href="/pages/metaads">Meta ADS</a></li>
                                <li className="hover:underline"><a href="/pages/googleads">Google ADS</a></li>
                            </ul>
                            <ul>
                                <li className="font-semibold mb-8">Desenvolvimento</li>
                                <li className="hover:underline"><a href="/pages/landingpages">Landing Pages</a></li>
                                <li className="hover:underline"><a href="/pages/websites">Websites</a></li>
                                <li className="hover:underline"><a href="/pages/sistemasweb">Sistemas Web</a></li>
                                <li className="hover:underline"><a href="#">Bots de Automação</a></li>
                            </ul>
                            <ul>
                                <li className="font-semibold mb-8">Marketing</li>
                                <li className="hover:underline"><a href="#">Redes Sociais</a></li>
                            </ul>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
                <li className="hover:border-opacity-[1] h-full flex justify-center items-center border-t-2 border-opacity-0 border-[#42c6ff] duration-300">Sobre</li>
                <li className="hover:border-opacity-[1] h-full flex justify-center items-center border-t-2 border-opacity-0 border-[#42c6ff] duration-300">Contato</li>
                <li className="hover:border-opacity-[1] h-full flex justify-center items-center border-t-2 border-opacity-0 border-[#42c6ff] duration-300">Redes Sociais</li>
                <li>
                    <Link className="text-base bg-[#00f6fb] hover:bg-[#00ddff] text-black h-[50px] transition duration-300 uppercase font-bold mt-5 rounded-[30px] px-5 py-3" href="https://linktr.ee/nexusagenciadigital" target="_blank"
                    >
                        Fale com um especialista
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

