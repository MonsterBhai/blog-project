import {useEffect, useState} from "react";
import Header from "../../header/Header.js";
import Posts from "../../posts/Posts.js";
import Sidebar from "../../sidebar/Sidebar.js";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Home = () => {
  const [posts,setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () =>{
      const res = await axios("/posts"+ search );
      setPosts(res.data);
    }
    fetchPosts();
  },[search]);
  return (
    <>
    <Header/>
    <div className='home'>
        <Posts posts={posts}/>
        <Sidebar/>
    </div>
    </>
  )
}

export default Home;