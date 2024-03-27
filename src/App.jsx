import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Weather from "./pages/Weather";
import Calculator from "./pages/Calculator";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<><Header/><Weather/></>  }/>
        <Route path="/calc" element = { <><Header/><Calculator/></> }/>
        <Route path="/note" element = { <><Header/><Notes/></> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
