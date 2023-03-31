import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
   return (
      <nav className={classes.nav}>
         <div className={classes.item}>
            <NavLink to={'/news'} className={classes.item}>News</NavLink>
            <NavLink to={'/profile'} className={classes.item}>Profile</NavLink>
            <NavLink to={'/dialogs'} className={classes.item} >Messages</NavLink>
         </div>
      </nav>
   );
}

export default Navbar;