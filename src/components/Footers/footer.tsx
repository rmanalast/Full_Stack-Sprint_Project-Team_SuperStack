import "./Footer.css";

function Footer() {
    const dateO = new Date().getFullYear();
    return (<footer>
        Copyright NXT LVL Games™ { dateO }
    </footer>);
}

export default Footer;