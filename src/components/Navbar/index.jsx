import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { BarChart4Icon, ChevronDownIcon, Code2Icon, MenuIcon } from "lucide-react";
import Image from "next/image";
import styles from './styles.module.css'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={`bg-transparent flex items-center ${styles.navbar}`} >
            <Image src="/nexuslogo.png" alt="Nexus Agência Digital" width={150} height={76} sizes="" />
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="bg-transparent">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent className={`${styles.sheet_content}`} side="right" >
                    <ul className={`flex h-full flex-col items-center justify-center ${styles.poppins}`}>
                        <li className={`${styles.li_title}`}>
                            Menu
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
                                                <h2 className={`${styles.accordion_title}`}>
                                                    <BarChart4Icon size={20} />
                                                    Tráfego Pago
                                                    <ChevronDownIcon size={16} />
                                                </h2>
                                                <ul className={`${styles.ul_links}`}>
                                                    <li>
                                                        <Link href="#">Meta Business</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Google ADS</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className={`${styles.accordion_title}`}>
                                                    <Code2Icon size={20} />
                                                    Desenvolvimento
                                                    <ChevronDownIcon size={16} />
                                                </h2>
                                                <ul className={`${styles.ul_links}`}>
                                                    <li>
                                                        <Link href="#">Landing Pages</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Websites</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Sistemas Personalizados</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </li>
                        <li className="py-4">
                            <Link className="text-lg" href="#">Sobre</Link>
                        </li>
                        <li className="py-4">
                            <Link className="text-lg" href="#">Contato</Link>
                        </li>

                        <li >
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    style={{ borderBottom: "none" }} value="options-social-medias">
                                    <AccordionTrigger className="text-lg">
                                        Redes Sociais
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className={`${styles.ul_links} text-center`}>
                                            <li>
                                                <Link href="#">
                                                    LinkedIn
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Instagram
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Facebook
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    TikTok
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </li>
                        <li>
                            <Button className={`${styles.btn} text-base`}>
                                <Link href="https://linktr.ee/nexusagenciadigital">
                                    Fale com um especialista
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default Navbar;