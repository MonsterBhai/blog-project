import "./SinglePost.css";
import header from "../abc/Header1.jpg"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const SinglePost = () => {
    
    const path = useLocation().pathname.split("/")[2];
    const [post,setPost] = useState({});
    useEffect(() => {
        const getPost = async () =>{
            const res = await axios.get("/posts/"+path);
            setPost(res.data);
        }
        getPost();
    },[path])
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            {post.photo?<img src={post.photo} alt="" className="singlePostImg" />:<img src={header} alt="" className="singlePostImg" />}
            
            <h1 className="singlePostTitle">Lorem ipsum dolor.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-nib"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <Link className="link" to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
                <span className="singlePostAuthorDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePostDesc">
                {post.desc}
            </p>
        </div>
    </div>
  )
}

export default SinglePost