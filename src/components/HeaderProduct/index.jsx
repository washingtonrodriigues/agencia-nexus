import { Breadcrumbs, Link } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Image from "next/image";
import styles from './styles.module.css'

const HeaderProduct = ({ title, src1, src2, bg, ...props }) => {
    return (
        <header className={`flex relative flex-col items-center justify-between ${styles.header}`}>
            <Image className={styles.bg} src={bg} alt={title} width={500} height={500} sizes="" />
            <div style={{ gap: "5px" }} className="flex items-center justify-center">
                <Image src={src1} alt={title} width={50} height={50} sizes="" />
                <h1 className={styles.title}>{title}</h1>
            </div>
            <Breadcrumbs separator="/" className="flex items-center justify-center" maxItems={2} aria-label="breadcrumb" style={{ color: "#fff" }}>
                <Link className="flex font-semibold items-center" underline="hover" color="#fff" href="/">
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                <Link underline="hover" color="#fff" href="#">
                    {title}
                </Link>
            </Breadcrumbs>
            <Image style={{ zIndex: 10 }} src={src2} alt={title} width={300} height={300} sizes="" />
        </header>

    );
}

export default HeaderProduct;