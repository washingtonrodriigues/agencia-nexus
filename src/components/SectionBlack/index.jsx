import Image from "next/image";
import styles from './styles.module.css'

const SectionBlack = ({ title, text, src, titleSpan, style }) => {
    return (
        <section className={`flex text-center justify-between items-center flex-col ${styles.container}`}>
            <div >
                <h1 className={styles.title}>{title}<span>{titleSpan}</span></h1>
                <p className={styles.text}>{text}</p>
            </div>
            <Image src={src} alt={title} width={350} height={0} sizes="" />
        </section>
    );
}

export default SectionBlack;