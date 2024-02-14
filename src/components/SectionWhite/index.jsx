import Image from "next/image";

const SectionWhite = ({ title, text, src, titleSpan, style }) => {
    return (
        <section className="flex lg:flex-row-reverse lg:h-[500px] lg:justify-evenly text-center py-0 px-5 bg-white text-black h-auto justify-between items-center flex-col">
            <div className="lg:w-[400px] lg:text-left">
                <h1 className="mt-[30px] lg:text-[2.8rem] font-ubuntu text-[2rem] leading-[2.4rem]">{title}<span className="text-[#0078ac]">{titleSpan}</span></h1>
                <p className="font-poppins my-5">{text}</p>
            </div>
            <Image className="lg:w-[450px]" src={src} alt={title} width={350} height={0} sizes="" />
        </section>
    );
}

export default SectionWhite;