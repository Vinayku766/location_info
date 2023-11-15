import {useState, useEffect} from "react";
// import { fetchData } from "./utils/api";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [pinCode, setPinCode] = useState(null);
  const [data, setData] = useState(null);
   
  const url = `https://api.zippopotam.us/in/${pinCode}`;

  //fetching Data

  useEffect(() => {
  if(pinCode !== null)
  fetchData();
  }, [pinCode])

  const fetchData = async () => {
    try {
      const data = await axios.get(url);
      return setData(data?.data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  //Reset changes

  const setReset = () => {
    setPinCode(null);
    setData(null);
  }

  return (
    <div>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home setCode={setPinCode} data={data} setReset={setReset}/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
