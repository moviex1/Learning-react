import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
      <NavLink
        to={`/dialogs/${props.userId}`}
        className={(navData) => (navData.isActive ? s.active : s.item)}
      >
      <img src="https://i.pinimg.com/736x/25/08/df/2508df25cd3be2ea3eeb919cd9d173e0.jpg" alt="" />
      
        <span className={s.name}>{props.name}</span>
        <span className={s.currentText}>{props.currentText}</span>
      </NavLink>
  );
};
const Dialogs = () => {
  return (
    <div className={s.communicate}>
      <div className={s.dialogs}>
        <DialogItem userId="1" name="Nikita" currentText='you:Hiiiii'/>
        <DialogItem userId="2" name="Ronnie" currentText='you:love uuu<3'/>
        <DialogItem userId="3" name="Vanya" currentText='how about play dota?'/>
        <DialogItem userId="4" name="Vlad" currentText='you:how r?'/>
      </div>
      <div className={s.messages}>
        <span className={s.message}>Hi</span>
        <span className={s.message}>How are u doing?</span>
        <span className={s.message}>Wanna hang out tomorrow?</span>
        <span className={s.message}>If yes, u need to buy some snacks</span>
        <span className={s.message}>
          We wanna watch new episodes of stranger things
        </span>
      </div>
    </div>
  );
};

export default Dialogs;
