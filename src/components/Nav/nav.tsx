import "./nav.css";

function Nav() {
    return(<nav>
         <div className="page-links">
            <span>
                <img
                src="../../../public/vite.svgvite.svg"
                height={100} width={100}
                alt = "Home" 
                 ></img>
            </span>
            <span>
                <a href="#" > Inventory </a>
            </span>
            <span>
                <a href="#" > Order </a>
            </span>
        </div>
    </nav>);
}

export default Nav;