const FirstSectionProduct = ({ title, ...props }) => {
    return (
        <section className="bg-white text-black py-[30px] px-[20px] lg:px-[50px] h-auto lg:h-[500px] flex flex-col justify-center">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold font-ubuntu leading-[2.5rem]">{title} <span className="text-[#0078ac]">{props.span1}</span> {props.title_continuation} <span className="text-[#0078ac]">{props.span2}</span> {props.title_continuation2}</h2>
            <div className="mt-[30px] flex flex-col text-justify font-poppins gap-5">
                <p>{props.p1}</p>
                <p>{props.p2}</p>
                <p>{props.p3}</p>
            </div>
        </section>
    );
}

export default FirstSectionProduct;