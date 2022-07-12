import s from "./Messages.module.css";

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Messages = () => {
  return (
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are u doing?" />
        <Message message="Wanna hang out tomorrow?" />
        <Message message="If yes, u have to buy some snacks" />
        <Message message="We wanna watch new episodes of stranger things" />
      </div>
  );
};

export default Messages;
