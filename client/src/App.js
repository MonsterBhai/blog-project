import Home from "./Components/pages/home/Home";
import Single from "./Components/pages/single/Single";
import Login from "./Components/pages/login/Login";
import Register from "./Components/pages/register/Register";
import Setting from "./Components/pages/settings/Setting";
import Write from "./Components/pages/write/Write";
import Topbar from "./Components/topbar/topbar";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/Setting" element={<Setting/>} />
        <Route path="/post/:postId" element={<Single/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
