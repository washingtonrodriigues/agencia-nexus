import Image from "next/image";

const SectionBlack = ({ title, text, src, titleSpan, style }) => {
    return (
        <section className="flex lg:flex-row lg:h-[500px] h-auto py-0 px-5 text-center justify-between items-center flex-col lg:justify-evenly">
            <div className="lg:w-[400px] lg:text-right" >
                <h1 className="font-ubuntu mt-[30px] lg:text-[2.8rem] text-[2rem]">{title}<span className="text-[#42c6ff]">{titleSpan}</span></h1>
                <p className="font-poppins my-5">{text}</p>
            </div>
            <Image src={src} className="lg:w-[450px]" alt={title} width={350} height={0} sizes="" />
        </section>
    );
}

export default SectionBlack;