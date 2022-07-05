import s from'./Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
        <ul className={s.ul}>
          <li ><a className={`${s.item} ${s.special}`} href='/profile'>Profile</a></li>
          <li ><a className={s.item}href='/dialogs'>Messages</a></li>
          <li ><a className={s.item}href='/'>News</a></li>
          <li ><a className={s.item}href='/'>Music</a></li>
          <li ><a className={s.item}href='/'>Settings</a></li>
        </ul>
      </nav>
    )
}

export default Nav;