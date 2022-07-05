import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>
      <div>
        <textarea></textarea>
        <button>Add posts</button>
      </div>
      <div className={s.posts}>
        <Post text="post 1" likeCount="+14"/> 
        <Post text="post 2" likeCount="-3"/>
        <Post text="post 3" likeCount="+16"/>
        <Post text="post 4" likeCount="-23"/>
        <Post text="post 5" likeCount="+115"/>     
      </div>
    </div>
  );
};

export default MyPosts;
