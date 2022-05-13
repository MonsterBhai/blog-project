import "./Posts.css";
import Post from "../post/Post.js";

const posts = (props) => {
  return (
    <div className='posts'>
      {
        props.posts.map((p) => {
          return <Post post={p}/>
        })
      }
    </div>
  )
}

export default posts