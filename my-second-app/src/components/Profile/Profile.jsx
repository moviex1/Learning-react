import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <img
        className={s.banner}
        alt=""
        src="https://sun9-49.userapi.com/impf/j2pI8W15Xt4h6nvxSwW0_DhwY9VaBFt-W_S7bQ/d10Cd2dEfcs.jpg?size=1590x530&quality=95&crop=0,108,1920,640&sign=ffec9fe0122fc7aad14fc67c80e2edb8&type=cover_group"
      />
      <div className={s.profile}>
        <img
          className={s.pfp}
          alt=""
          src="https://i.pinimg.com/originals/ff/02/b9/ff02b97a12dcbead4acea145b00d7698.jpg"
        />
        <div className={s.description}>
          Hello, I'm Nikita, and im learning React.js
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;