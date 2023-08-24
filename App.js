import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import './App.css';
import Detail from "./components/Detail.js"
import Header from "./components/header.js"
import Home from "./components/home"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header />
        <Routes>
            <Route path = "/" element={<Login />} />
            <Route path = "/home" element={<Home/>} />
            <Route path = "/detail/:id" element={<Detail/>} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
