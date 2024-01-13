import Link from "next/link";

const BlackBtn = ({ title, href, className }) => {
    const buttonStyle = {
        backgroundColor: "#000",
        color: "#fff",
        textTransform: "uppercase",
        fontFamily: "poppins",
        fontWeight: "bold",
        padding: "13px 28px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px auto",
        width: "150px",
    }
    return (
        <Link href={href} className={className} style={buttonStyle}>{title}</Link>
    );
}

export default BlackBtn;