import "./Footer.css";

function Footer() {
    const dateO = new Date().getFullYear();
    return (<footer className="Footer">
        Copyright Raven M, Rylan E, Akeem W @{ dateO }
    </footer>);
}

export default Footer;