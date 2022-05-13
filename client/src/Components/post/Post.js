import './Post.css';
import header from "../abc/Header1.jpg";
import {Link} from "react-router-dom";

const Post = ({post}) => {
  return (
    <div className='post'>
      {post.photo?<img src={post.photo} alt="noImage" className="postImg" />:<img src={header} alt="luffy.jpg" className="postImg" />}
        
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c) => {
                return <span className="postCat">{c.name}</span>
              })}
            </div>
            <Link className="link" to={`/post/${post._id}`}>
            <span className="postTitle">{post.title}</span>
            </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">{post.desc}</p>
    </div>
  )
}

export default Post