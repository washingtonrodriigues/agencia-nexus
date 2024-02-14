import { Breadcrumbs, Link } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Image from "next/image";

const HeaderProduct = ({ title, src1, src2, bg, ...props }) => {
    return (
        <header className="flex relative flex-col items-center justify-between h-[500px] mt-[30px] lg:flex-row-reverse ">
            <Image className="absolute bottom-0 opacity-20 lg:w-full" src={bg} alt={title} width={500} height={500} sizes="" />
            <div className="flex flex-col gap-[50px] lg:absolute right-[20%]">
                <div className="flex gap-[5px] items-center justify-center">
                    <Image src={src1} alt={title} width={50} height={50} sizes="" className="lg:w-[80px]" />
                    <h1 className="font-poppins font-bold text-[2rem] lg:text-[3rem]">{title}</h1>
                </div>
                <Breadcrumbs separator="/" className="flex lg:text-[1.2rem] items-center text-white justify-center" maxItems={2} aria-label="breadcrumb">
                    <Link className="flex font-semibold hover:text-primary transition duration-300 items-center" underline="hover" color="#fff" href="/">
                        <HomeIcon sx={{ mr: 0.5 }} className="lg:text-[1.3rem]" fontSize="inherit" />
                        Home
                    </Link>
                    <Link underline="hover" color="#fff" href="#">
                        {title}
                    </Link>
                </Breadcrumbs>
            </div>
            <Image className="z-10 lg:w-[500px] lg:absolute left-[10%]" src={src2} alt={title} width={300} height={300} sizes="" />
        </header>

    );
}

export default HeaderProduct;