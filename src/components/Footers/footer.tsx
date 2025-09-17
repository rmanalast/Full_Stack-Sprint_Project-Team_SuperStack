import "./Footer.css";

function Footer() {
    const dateO = new Date().getFullYear();
    return (<footer className="Footer">
        Copyright NXT LVL Games™ { dateO }
    </footer>);
}

export default Footer;