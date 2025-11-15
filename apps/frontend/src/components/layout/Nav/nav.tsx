import "./nav.css";
import {NavLink} from "react-router";

function Nav() {
    return(<nav>
         <div className="Nav">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink className="Navlink" to="/inventory">
                Inventory
            </NavLink>
            <NavLink className="Navlink" to="/wishlist">
                Wishlist
            </NavLink>
            <NavLink className="Navlink" to="/rental">
                Rental
            </NavLink>
            <NavLink className="Navlink" to="/cart">
                Cart {/** Maybe change to an image and update to show how many objects in cart in future*/}
            </NavLink>
        </div>
    </nav>);
}

export default Nav;