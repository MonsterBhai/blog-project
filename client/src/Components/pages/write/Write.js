import "./Write.css";
import header from "../../abc/Header2.jpg";

const Write = () => {
  return (
    <div className="write">
        <img src={header} alt="input.Img" className="writeImg" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" 
                className="writeInput"
                placeholder="Title"
                autoFocus="true" />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story...." 
                type="text" 
                className="writeInput writeText">
                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>

    </div>
  )
}

export default Write