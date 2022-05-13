import "./Setting.css";
import Sidebar from "../../sidebar/Sidebar.js"
import zoro from "../../abc/Zoro.jpg"

const Setting = () => {
  return (
    <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src={zoro} alt="Profile.jpg" />
                    <label htmlFor="fileInput">
                        <i className="settingPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style= {{display:"none"}} />
                </div>
                <label >Username</label>
                <input type="text" placeholder= "Ravindra" />
                <label >Email</label>
                <input type="email" placeholder= "ravindra@gmail.com" />
                <label >Password</label>
                <input type="password" />
                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Setting