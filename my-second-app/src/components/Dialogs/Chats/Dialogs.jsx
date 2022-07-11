import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={s.communicate}>
      <div className={s.dialogs}>
        <NavLink to = '/dialogs/1'className={(navData) => navData.isActive ? s.active : s.item}>Nikita</NavLink>
        <NavLink to = '/dialogs/2'className={(navData) => navData.isActive ? s.active : s.item}>Vlad</NavLink>
        <NavLink to = '/dialogs/3'className={(navData) => navData.isActive ? s.active : s.item}>Vanya</NavLink>
        <NavLink to = '/dialogs/4'className={(navData) => navData.isActive ? s.active : s.item}>Ronnie</NavLink>
      </div>
      <div className={s.messages}>
        <span className={s.message}>Hi</span>
        <span className={s.message}>How are u doing?</span>
        <span className={s.message}>Wanna hang out tomorrow?</span>
        <span className={s.message}>If yes, u need to buy some snacks</span>
        <span className={s.message}>We wanna watch new episodes of stranger things</span>
      </div>
    </div>
  );
};

export default Dialogs;
