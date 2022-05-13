import "./Single.css";
import Sidebar from "../../sidebar/Sidebar.js";
import SinglePost from "../../singlePost/SinglePost.js";

const Single = () => {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single