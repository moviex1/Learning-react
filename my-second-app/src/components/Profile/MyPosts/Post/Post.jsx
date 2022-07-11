import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.posts}>
      <div className={s.item}>
        <img
          className={s.pfp}
          alt=""
          src="https://p.favim.com/orig/2018/11/06/eromanga-sensei-icons-anime-Favim.com-6516798.png"
        />
        {props.text}
        <div className={s.evalution}>
          <span className={s.like}>Like </span>
          <span className={s.dislike}>Dislike</span>
          <span className={s.likeCount}> {props.likeCount} </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
