import s from "./Dialogs.module.css";
import DialogItems from "./DialogsItems/DialogItems";
import Messages from "./Messages/Messages";


const Dialogs = () => {
  return (
    <div className={s.communicate}>
      <DialogItems />
      <Messages />
    </div>
  );
};

export default Dialogs;
