import Image from 'next/image';
import styles from './styles.module.css'
import Link from 'next/link';
import BlackBtn from '@/components/ui/black-btn';

const About = () => {
    return (
        <section className="relative bg-primary text-black py-[30px] lg:pt-[50px]">
            <div className="text-center">
                <h1 className={`${styles.h1} font-poppins uppercase flex justify-center items-center tracking-[2px] lg:text-[18px]`}>Nexus</h1>
                <h2 className="font-ubuntu text-[2rem] lg:text-[50px]  font-bold">Quem somos?</h2>
                <span className={`${styles.separator}`}></span>
            </div>
            <ul className="my-5 mx-[30px] flex flex-col gap-5 lg:flex-row lg:justify-center lg:gap-[80px] lg:my-[50px]">
                <li className="font-roboto font-[900] text-[1.5rem] text-white text-shadow flex gap-3 lg:items-center">
                    <Image src="/brazilsvg.svg" alt='Clientes por todo Brasil' width={0} height={0} sizes='' className='w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]' />
                    <p className='lg:flex lg:flex-col lg:items-start'><span className='lg:text-[3rem]'>Clientes</span> por todo Brasil</p>
                </li>
                <li className="font-roboto font-[900] text-[1.5rem] text-white text-shadow flex gap-3 lg:items-center">
                    <Image src="/plussvg.svg" alt='Clientes por todo Brasil' width={0} height={0} sizes='' className='w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]' />
                    <p className='lg:flex lg:flex-col lg:items-start'><span className='lg:text-[3rem]'>03 anos</span> de mercado</p>
                </li>
                <li className="font-roboto font-[900] text-[1.5rem] text-white text-shadow flex gap-3 lg:items-center">
                    <Image src="/plussvg.svg" alt='Clientes por todo Brasil' width={0} height={0} sizes='' className='w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]' />
                    <p className='lg:flex lg:flex-col lg:items-start'><span className='lg:text-[3rem]'>100k</span> faturados por clientes</p>
                </li>
            </ul>
            <p className="font-roboto text-justify mx-[30px]  lg:text-center lg:px-40 lg:mb-[50px]">A <strong>Nexus</strong>, fundada em 2020 por <strong>Timóteo Levi</strong> e <strong>Washington Rodrigues</strong>, é uma agência que une paixão por <strong>dados</strong>, <strong>tecnologia</strong> e <strong>marketing digital</strong>. Comprometida em gerar valor para clientes, destacamo-nos na gestão de tráfego no <strong>Meta ADS</strong> e <strong>Google ADS</strong>, além de oferecer desenvolvimento personalizado de sites e sistemas web. Ideal para pequenas e médias empresas em busca de crescimento digital e resultados mensuráveis.</p>

            {/* <Link href="#" className={`${styles.btn}`}>Saiba mais</Link> */}
            <BlackBtn href="" title="Saiba mais" />
            <Image className='absolute bottom-0 right-0' src="/aboutbgimg.png" alt='' width={132} height={160} sizes='' style={{ opacity: ".3" }} />
        </section >
    );
}

export default About;