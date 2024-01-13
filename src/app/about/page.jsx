import Image from 'next/image';
import styles from './styles.module.css'
import Link from 'next/link';
import BlackBtn from '@/components/ui/black-btn';

const About = () => {
    return (
        <section className={`${styles.section_about} relative`}>
            <div className="text-center">
                <h1 className={`${styles.h1}`}>Nexus</h1>
                <h2 className={`${styles.h2}`}>Quem somos?</h2>
                <span className={styles.separator}></span>
            </div>
            <ul className={`${styles.ul}`}>
                <li className={`${styles.li}`}>
                    <Image src="/brazilsvg.svg" alt='Clientes por todo Brasil' width={30} height={30} sizes='' />
                    <p>Clientes por todo Brasil</p>
                </li>
                <li className={`${styles.li}`}>
                    <Image src="/plussvg.svg" alt='Clientes por todo Brasil' width={30} height={30} sizes='' />
                    <p>03 anos de mercado</p>
                </li>
                <li className={`${styles.li}`}>
                    <Image src="/plussvg.svg" alt='Clientes por todo Brasil' width={30} height={30} sizes='' />
                    <p>100k faturados por clientes</p>
                </li>
            </ul>
            <p className={`${styles.paragraph}`}>A Nexus, fundada em 2020 por Timóteo Levi e Washington Rodrigues, é uma agência que une paixão por dados, tecnologia e marketing digital. Comprometida em gerar valor para clientes, destacamo-nos na gestão de tráfego no Meta e Google, além de oferecer desenvolvimento personalizado de sites e sistemas web. Ideal para pequenas e médias empresas em busca de crescimento digital e resultados mensuráveis.</p>

            {/* <Link href="#" className={`${styles.btn}`}>Saiba mais</Link> */}
            <BlackBtn href="" title="Saiba mais" />
            <Image className='absolute bottom-0 right-0' src="/aboutbgimg.png" alt='' width={132} height={160} sizes='' style={{ opacity: ".3" }} />
        </section >
    );
}

export default About;