
import { NavLink } from "react-router-dom";
import classes from "../Header/Header.module.css";
import Auth from "../Auth/Auth";
const Header = (props) => {
   return (
      <header className={classes.header}>
         <div className={classes.header__body}>
            <div className={classes.header__logo}>
               <NavLink to={'/'}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Logo_BNTU.png" alt="BNTU" ></img>
               </NavLink>
            </div>
            <Auth />
         </div>

      </header>
   );
}

export default Header;