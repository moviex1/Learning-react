import { NavLink } from 'react-router-dom';
import s from'./Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
        <ul className={s.ul}>
          <li><NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/profile'>Profile</NavLink></li>
          <li><NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/dialogs'>Messages</NavLink></li>
          <li><NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/'>News</NavLink></li>
          <li><NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/'>Music</NavLink></li>
          <li><NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/'>Settings</NavLink></li>
        </ul>
      </nav>
    )
}

export default Nav;