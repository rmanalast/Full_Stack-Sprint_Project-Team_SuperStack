import "./nav.css";

function Nav() {
    return(<nav>
         <div className="Nav">
            <span>
                <a href="#"> Home </a>
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